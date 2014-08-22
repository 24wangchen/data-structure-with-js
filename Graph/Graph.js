/**
 * 图(Graph)
 *
 * 图(Graph)是一种比线性表和树更为复杂的数据结构。
 *
 * 线性结构：是研究数据元素之间的一对一关系。在这种结构中，除第一个和最后一个元素外，任何一个元素都有唯一的一个直接前驱和直接后继。
 *
 * 树结构：是研究数据元素之间的一对多的关系。在这种结构中，每个元素对下(层)可以有0个或多个元素相联系，对上(层)只有唯一的一个元素相关，数据元素之间有明显的层次关系。
 *
 * 图结构：是研究数据元素之间的多对多的关系。在这种结构中，任意两个元素之间可能存在关系。即结点之间的关系可以是任意的，图中任意元素之间都可能相关。
 *
 * 图的应用极为广泛，已渗入到诸如语言学、逻辑学、物理、化学、电讯、计算机科学以及数学的其它分支。
 *
 * 图的基本概念
 *
 * 一个图(G)定义为一个偶对(V,E) ，记为G=(V,E) 。其中： V是顶点(Vertex)的非空有限集合，记为V(G)；E是无序集V&V的一个子集，记为E(G) ，其元素是图的弧(Arc)。
 * 将顶点集合为空的图称为空图。其形式化定义为：
 G=(V ，E)
 V={v|v∈data object}
 E={<v,w>| v,w∈V∧p(v,w)}
 P(v,w)表示从顶点v到顶点w有一条直接通路。
 *
 * 弧(Arc) ：表示两个顶点v和w之间存在一个关系，用顶点偶对<v,w>表示。通常根据图的顶点偶对将图分为有向图和无向图。
 * 有向图(Digraph)： 若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是有序的，称图G是有向图。
 *   在有向图中，若 <v,w>∈E(G) ，表示从顶点v到顶点w有一条弧。 其中：v称为弧尾(tail)或始点(initial node)，w称为弧头(head)或终点(terminal node) 。
 * 无向图(Undigraph)： 若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是无序的，称图G是无向图。
 *   在无向图中，若<v,w>∈E(G) ，有<w,v>∈E(G) ，即E(G)是对称，则用无序对(v,w) 表示v和w之间的一条边(Edge)，因此(v,w) 和(w,v)代表的是同一条边。
 *
 * 例1：设有有向图G1和无向图G2，形式化定义分别是：
 G1=(V1 ，E1)
 V1={a,b,c,d,e}
 E1={<a,b>,<a,c>, <a,e>,<c,d>,<c,e> ,<d,a>,<d,b>,<e,d>}
 G2=(V2 ，E2)
 V2={a,b,c,d}
 E2={(a,b), (a,c), (a,d), (b,d), (b,c), (c,d)}
 *
 * 完全无向图：对于无向图，若图中顶点数为n ，用e表示边的数目，则e ∈[0，n(n-1)/2] 。具有n(n-1)/2条边的无向图称为完全无向图。
 完全无向图另外的定义是：
 * 对于无向图G=(V，E)，若vi，vj ∈V ，当vi≠vj时，有(vi ,vj)∈E，即图中任意两个不同的顶点间都有一条无向边，这样的无向图称为完全无向图。
 *
 * 完全有向图：对于有向图，若图中顶点数为n ，用e表示弧的数目，则e∈[0，n(n-1)] 。具有n(n-1)条边的有向图称为完全有向图。
 完全有向图另外的定义是：
 * 对于有向图G=(V，E)，若vi，vj∈V ，当vi ≠vj时，有<vi ,vj>∈E∧<vj , vi >∈E ，即图中任意两个不同的顶点间都有一条弧，这样的有向图称为完全有向图。
 *
 * 有很少边或弧的图（e<n㏒n）的图称为稀疏图，反之称为稠密图。
 * 权(Weight)：与图的边和弧相关的数。权可以表示从一个顶点到另一个顶点的距离或耗费。
 *
 * 子图和生成子图：设有图G=(V，E)和G’=(V’，E’)，若V’∈V且E’∈E ，则称图G’是G的子图；若V’=V且E’∈E，则称图G’是G的一个生成子图。
 * 顶点的邻接(Adjacent)：对于无向图G=(V，E)，若边(v,w)∈E，则称顶点v和w 互为邻接点，即v和w相邻接。边(v,w)依附(incident)与顶点v和w 。
 * 对于有向图G=(V ，E)，若有向弧<v,w>∈E，则称顶点v “邻接到”顶点w，顶点w “邻接自”顶点v ，弧<v,w> 与顶点v和w “相关联” 。
 *
 * 顶点的度、入度、出度：对于无向图G=(V，E)， vi∈V，图G中依附于vi的边的数目称为顶点vi的度(degree)，记为TD(vi)。
 显然，在无向图中，所有顶点度的和是图中边的2倍。 即   ∑TD(vi)=2e      i=1, 2, …, n ，e为图的边数。
 对有向图G=(V，E)，若vi ∈V ，图G中以vi作为起点的有向边(弧)的数目称为顶点vi的出度(Outdegree)，记为OD(vi) ；以vi作为终点的有向边(弧)的数目称为顶点vi的入度(Indegree)，记为ID(vi) 。顶点vi的出度与入度之和称为vi的度，记为TD(vi) 。即
 TD(vi)=OD(vi)+ID(vi)
 *
 * 路径(Path)、路径长度、回路(Cycle) ：对无向图G=(V，E)，若从顶点vi经过若干条边能到达vj，称顶点vi和vj是连通的，又称顶点vi到vj有路径。
 对有向图G=(V，E)，从顶点vi到vj有有向路径，指的是从顶点vi经过若干条有向边(弧)能到达vj。
 或路径是图G中连接两顶点之间所经过的顶点序列。即
 Path=vi0vi1…vim ，vij∈V且(vij-1, vij)∈E   j=1,2, …,m
 或
 Path=vi0vi1 …vim ，vij∈V且<vij-1, vij>∈E  j=1,2, …,m
 路径上边或有向边(弧)的数目称为该路径的长度。
 在一条路径中，若没有重复相同的顶点，该路径称为简单路径；第一个顶点和最后一个顶点相同的路径称为回路(环)；在一个回路中，若除第一个与最后一个顶点外，其余顶点不重复出现的回路称为简单回路(简单环)。
 *
 * 连通图、图的连通分量：对无向图G=(V，E)，若vi ，vj ∈V，vi和vj都是连通的，则称图G是连通图，否则称为非连通图。若G是非连通图，则极大的连通子图称为G的连通分量。
 对有向图G=(V，E)，若vi ，vj ∈V，都有以vi为起点， vj 为终点以及以vj为起点，vi为终点的有向路径，称图G是强连通图，否则称为非强连通图。若G是非强连通图，则极大的强连通子图称为G的强连通分量。
 “极大”的含义：指的是对子图再增加图G中的其它顶点，子图就不再连通。
 生成树、生成森林：一个连通图(无向图)的生成树是一个极小连通子图，它含有图中全部n个顶点和只有足以构成一棵树的n-1条边，称为图的生成树。
 关于无向图的生成树的几个结论：
 ◆ 一棵有n个顶点的生成树有且仅有n-1条边；
 ◆ 如果一个图有n个顶点和小于n-1条边，则是非连通图；
 ◆ 如果多于n-1条边，则一定有环；
 ◆ 有n-1条边的图不一定是生成树。

 有向图的生成森林是这样一个子图，由若干棵有向树组成，含有图中全部顶点。
 有向树是只有一个顶点的入度为0 ，其余顶点的入度均为1的有向图。

 *
 * 网：每个边(或弧)都附加一个权值的图，称为带权图。带权的连通图(包括弱连通的有向图)称为网或网络。网络是工程上常用的一个概念，用来表示一个工程或某种流程
 */

/**
 * 图的存储结构
 *
 图的存储结构比较复杂，其复杂性主要表现在：
 ◆ 任意顶点之间可能存在联系，无法以数据元素在存储区中的物理位置来表示元素之间的关系。
 ◆ 图中顶点的度不一样，有的可能相差很大，若按度数最大的顶点设计结构，则会浪费很多存储单元，反之按每个顶点自己的度设计不同的结构，又会影响操作。
 图的常用的存储结构有：邻接矩阵、邻接链表、十字链表、邻接多重表和边表。
 */

/*
邻接矩阵(数组)表示法

基本思想：对于有n个顶点的图，用一维数组vexs[n]存储顶点信息，用二维数组A[n][n]存储顶点之间关系的信息。该二维数组称为邻接矩阵。在邻接矩阵中，以顶点在vexs数组中的下标代表顶点，邻接矩阵中的元素A[i][j]存放的是顶点i到顶点j之间关系的信息。

1  无向图的数组表示

(1)  无权图的邻接矩阵
无向无权图G=(V，E)有n(n≧1)个顶点，其邻接矩阵是n阶对称方阵。其元素的定义如下：
                -- 1   若(vi , vj)∈E，即vi , vj邻接
    A[i][j]=
                -- 0   若(vi , vj)∉E，即vi , vj不邻接

(2)  带权图的邻接矩阵
无向带权图G=(V，E) 的邻接矩阵。其元素的定义如下：
                -- Wij    若(vi , vj)∈E，即vi , vj邻接，权值为wij
    A[i][j]=

                -- ∞   若(vi , vj)∉E，即vi , vj不邻接时

(3)  无向图邻接矩阵的特性
◆ 邻接矩阵是对称方阵
◆ 对于顶点vi，其度数是第i行的非0元素的个数；
◆ 无向图的边数是上(或下)三角形矩阵中非0元素个数。

2  有向图的数组表示

(1)  无权图的邻接矩阵
若有向无权图G=(V，E)有n(n≧1)个顶点，则其邻接矩阵是n阶对称方阵。元素定义如下：
                -- 1   若<vi, vj>∈E，从vi到vj有弧
    A[i][j]=
                -- 0   若<vi , vj>∉E  从vi到vj 没有弧

(2)  带权图的邻接矩阵
有向带权图G=(V，E)的邻接矩阵。其元素的定义如下：
                -- wij    若<vi,vj>∈E，即vi , vj邻接，权值为wij
    A[i][j]=
                ∞   若<vi,vj>∉E，即vi , vj不邻接时

⑶ 有向图邻接矩阵的特性
◆ 对于顶点vi，第i行的非0元素的个数是其出度OD(vi)；第i列的非0元素的个数是其入度ID(vi) 。
◆ 邻接矩阵中非0元素的个数就是图的弧的数目。

3  图的邻接矩阵的操作

图的邻接矩阵的实现比较容易，定义两个数组分别存储顶点信息(数据元素)和边或弧的信息(数据元素之间的关系) 。

 */

// 图的数组（邻接矩阵）存储表示
var DG = 1;     // 有向图
var DN = 2;     // 有向网
var UDG = 3;    // 无向图
var UDN = 4;    // 无向网

function ArcCell(adj, info) {
    // 顶点类型。对于无权图，用1或0表示相邻否；对带权图，则为权值类型
    this.adj = typeof adj === 'number' ? adj : Infinity;
    // 该弧相关信息
    this.info = info || null;
}

function MGraph(vexs, arcs, vexnum, arcnum, kind) {
    // 顶点向量
    this.vexs = vexs || [];
    // 邻接矩阵
    this.arcs = arcs || [];
    // 图的当前顶点数
    this.vexnum = vexnum || 0;
    // 图的当前弧数
    this.arcnum = arcnum || 0;
    // 图的种类标志
    this.kind = kind || DG;
}

MGraph.prototype = {
    createGraph: function () {
        switch (this.kind) {
            case DG:
                return createDG(this);     // 构造有向图
            case DN:
                return createDN(this);     // 构造有向网
            case UDG:
                return createUDG(this);   // 构造无向图
            case UDN:
                return createUDN(this);   // 构造无向网
            default:
                throw new Error('非有效的图类型');
        }
    },

    locateVex: function (vp) {
        for (var i = 0; i < this.vexnum; i++) {
            if (this.vexs[i] === vp) return i;
        }

        return -1;
    },

    /**
     * 向图中增加顶点
     * @param {} vp
     */
    addVertex: function (vp) {
        if (this.locateVex(vp) !== -1) {
            console.error('Vertex has existed!');
            return;
        }

        var k = this.vexnum;
        this.vexs[this.vexnum++] = vp;

        var j;
        if (this.kind === DG || this.kind === UDG) {
            for (j = 0; j < this.vexnum; j++) {
                this.arcs[j][k].adj = this.arcs[k][j].adj = 0;
            }
        } else {
            for (j = 0; j < this.vexnum; j++) {
                this.arcs[j][k].adj = this.arcs[k][j].adj = Infinity;
            }
        }
    },

    addArc: function(arcType){

    }
};

var createDG = createGraph(DG);
var createDN = createGraph(DN);
var createUDG = createGraph(UDG);
var createUDN = createGraph(UDN);

function createGraph(kind){
    var adj;
    var setMatrixValue;

    if(kind === 2 || kind === 4) {
        adj = Infinity;
        setMatrixValue = function(){
            return prompt('weight: ');
        };
    } else {
        adj = 0;
        setMatrixValue = function(){
            return 1;
        };
    }

    return function(MGraph){
        MGraph.vexnum = parseInt(prompt('vexnum: '), 10);
        MGraph.arcnum = parseInt(prompt('arcnum: '), 10);
        // incInfo为0则各弧不含其他信息
        var incInfo = parseInt(prompt('incInfo: '), 10);

        // 构造顶点向量
        var i , j;
        for (i = 0; i < MGraph.vexnum; i++) MGraph.vexs[i] = prompt('顶点向量vex: ');

        // 初始化邻接矩阵
        for (i = 0; i < MGraph.vexnum; i++) {
            for (j = 0; j < MGraph.vexnum; j++) {
                MGraph.arcs[i] = MGraph.arcs[i] || [];
                MGraph.arcs[i][j] = new ArcCell(adj, null);
            }
        }

        // 构造邻接矩阵
        for (var k = 0; k < MGraph.arcnum; k++) {
            // 输入一条边依附的顶点及权值
            var v1 = prompt('v1: ');
            var v2 = prompt('v2: ');

            // 确定v1，v2在G中的位置
            i = MGraph.locateVex(v1);
            j = MGraph.locateVex(v2);

            var w = setMatrixValue();
            // 弧<v1, v2>的权值
            MGraph.arcs[i][j].adj = w;
            if (incInfo) MGraph.arcs[i][j].info = prompt('info: ');
            if(kind === 3 || kind === 4) MGraph.arcs[j][i] = MGraph.arcs[i][j];
        }
    };
}


var vexs = ['a', 'b', 'c', 'd', 'e'];
var arcs = [
    [
        {"adj": Infinity, "info": null},
        {"adj": "6", "info": null},
        {"adj": "2", "info": null},
        {"adj": Infinity, "info": null},
        {"adj": Infinity, "info": null}
    ],
    [
        {"adj": "6", "info": null},
        {"adj": Infinity, "info": null},
        {"adj": "3", "info": null},
        {"adj": "4", "info": null},
        {"adj": "3", "info": null}
    ],
    [
        {"adj": "2", "info": null},
        {"adj": "3", "info": null},
        {"adj": Infinity, "info": null},
        {"adj": "1", "info": null},
        {"adj": Infinity, "info": null}
    ],
    [
        {"adj": Infinity, "info": null},
        {"adj": "4", "info": null},
        {"adj": "1", "info": null},
        {"adj": Infinity, "info": null},
        {"adj": "5", "info": null}
    ],
    [
        {"adj": Infinity, "info": null},
        {"adj": "3", "info": null},
        {"adj": Infinity, "info": null},
        {"adj": "5", "info": null},
        {"adj": Infinity, "info": null}
    ]
];
var udn = new MGraph(vexs, arcs, 5, 7, 4);

