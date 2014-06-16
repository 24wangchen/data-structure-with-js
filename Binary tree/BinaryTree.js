/**
 * 树的一些概念
 *
 * 树（Tree）是n（n>=0）个结点的有限集。在任意一棵非空树中：
 * （1）有且仅有一个特定的称为根（Root）的结点；
 * （2）当n>1时，其余结点可分为m(m>0)个互不相交的有限集T1,T2,T3,...Tm，其中每一个集合本身又是一棵树，并且称为根的子树（Subtree）。
 *
 * 例如，（a）是只有一个根结点的树；
 * （b）是有13个结点的树，其中A是根，其余结点分成3个互不相交的子集：T1={B,oushiE,F,K,L},t2={D,H,I,J,M};T1,T2和T3都是根A的子树，且本身也是一棵树。
 *
 * 树的结点包含一个数据元素及若干指向其子树的分支。结点拥有的子树数称为结点的度（Degree）。例如，（b）中A的度为3，C的度为1，F的度为0.度为0的结点称为叶子（Leaf）或者终端结点。度不为0的结点称为非终端结点或分支结点。树的度是树内各结点的度的最大值。（b）的树的度为3.__defineGetter__结点的子树的根称为该结点的孩子（Child）。相应的，该结点称为孩子的双亲（Parent）。同一个双亲的孩子之间互称兄弟（Sibling）。结点的祖先是从根到该结点所经分支上的所有结点。反之，以某结点为根的子树中的任一结点都称为该结点的子孙。
 * 结点的层次（Level）从根开始定义起，根为第一层，跟的孩子为第二层。若某结点在第l层，则其子树的根就在第l+1层。其双亲在同一层的结点互为堂兄弟。例如，结点G与E，F,H,I,J互为堂兄弟。树中结点的最大层次称为树的深度（Depth）或高度。（b）的树的深度为4。
 *
 * 如果将树中结点的各子树看成从左至右是有次序的（即不能交换），则称该树为有序树，否则称为无序树。在有序树中最左边的子树的根称为第一个孩子，最右边的称为最后一个孩子。
 * 森林（Forest）是m（m>=0）棵互不相交的树的集合。对树中每个结点而言，其子树的集合即为森林。
 *
 *
 */

/**
 * 二叉树（Binary Tree）是另一种树型结构，它的特点是每个结点至多只有两棵子树（即二叉树中不存在度大于2的结点），并且，二叉树的子树有左右之分（其次序不能任意颠倒。）
 *
 * 二叉树的性质
 * 1.在二叉树的第i层上至多有2的i-1次方个结点(i>=1)。
 * 2.深度为k的二叉树至多有2的k次方-1个结点，(k>=1)。
 * 3.对任何一棵二叉树T，如果其终端结点数为n0，度为2的结点数为n2，则n0 = n2 + 1;
 *      一棵深度为k且有2的k次方-1个结点的二叉树称为满二叉树。
 *      深度为k的，有n个结点的二叉树，当且仅当其每一个结点都与深度为k的满二叉树中编号从1至n的结点一一对应时，称之为完全二叉树。
 * 下面的完全二叉树的两个特性
 * 4.具有n个结点的完全二叉树的深度为Math.floor(log 2 n) + 1
 * 5.如果对一棵有n个结点的完全二叉树（其深度为Math.floor(log 2 n) + 1）的结点按层序编号（从第1层到第Math.floor(2 n) + 1，每层从左到右），则对任一结点（1<=i<=n）有：
 *     (1)如果i=1，则结点i、是二叉树的根，无双亲；如果i>1，则其双亲parent(i)是结点Math.floor(i/2)。
 *     (2)如果2i > n，则结点i无左孩子（结点i为叶子结点）；否则其左孩子LChild(i)是结点2i.
 *     (3)如果2i + 1 > n，则结点i无右孩子；否则其右孩子RChild(i)是结点2i + 1;
 */

/*
二叉树的存储结构

1.顺序存储结构
用一组连续的存储单元依次自上而下，自左至右存储完全二叉树上的结点元素，即将二叉树上编号为i的结点元素存储在加上定义的一维数组中下标为i-1的分量中。“0”表示不存在此结点。这种顺序存储结构仅适用于完全二叉树。
因为，在最坏情况下，一个深度为k且只有k个结点的单支树（树中不存在度为2的结点）却需要长度为2的n次方-1的一维数组。

2.链式存储结构
二叉树的结点由一个数据元素和分别指向其左右子树的两个分支构成，则表示二叉树的链表中的结点至少包含三个域：数据域和左右指针域。有时，为了便于找到结点的双亲，则还可在结点结构中增加一个指向其双亲结点的指针域。利用这两种结构所得的二叉树的存储结构分别称之为二叉链表和三叉链表。
在含有n个结点的二叉链表中有n+1个空链域，我们可以利用这些空链域存储其他有用信息，从而得到另一种链式存储结构---线索链表。

先（根）序遍历：根左右
中（根）序遍历：左根右
后（根）序遍历：左右根

 */


// 顺序存储结构
(function(){
    // 顺序存储结构的遍历
    var tree = [1, 2, 3, 4, 5, , 6, , , 7];

    console.log('preOrder:');
    void function preOrderTraverse(x, visit){
        visit(tree[x]);
        if(tree[2 * x + 1]) preOrderTraverse(2 * x + 1, visit);
        if(tree[2 * x + 2]) preOrderTraverse(2 * x + 2, visit);
    }(0, function(value){
        console.log(value);
    });

    console.log('inOrder:');
    void function inOrderTraverse(x, visit){
        if(tree[2 * x + 1]) inOrderTraverse(2 * x + 1, visit);
        visit(tree[x]);
        if(tree[2 * x + 2]) inOrderTraverse(2 * x + 2, visit);
    }(0, function(value){
        console.log(value);
    });

    console.log('postOrder:');
    void function postOrderTraverse(x, visit){
        if(tree[2 * x + 1]) postOrderTraverse(2 * x + 1, visit);
        if(tree[2 * x + 2]) postOrderTraverse(2 * x + 2, visit);
        visit(tree[x]);
    }(0, function(value){
        console.log(value);
    });
}());

var Stack = require('../Stack/stack');

// 链式存储结构
function BinaryTree(data, leftChild, rightChild){
    this.data = data || null;
    // 左右孩子结点
    this.leftChild = leftChild || null;
    this.rightChild = rightChild || null;
}
BinaryTree.prototype = {
    constructor: BinaryTree,
    // 判断两棵树是否相似
    isSimilar: function isSimilar(tree){
        return tree &&
            this.leftChild && isSimilar.call(this.leftChild, tree.leftChild) &&
            this.rightChild && isSimilar.call(this.rightChild, tree.rightChild);
    },
    createBinaryTree: function (tree){
        void function preOrderTraverse(node, x, visit){
            visit(node, tree[x]);

            if(tree[2 * x + 1]) preOrderTraverse(node.leftChild = new BinaryTree(), 2 * x + 1, visit);
            if(tree[2 * x + 2]) preOrderTraverse(node.rightChild = new BinaryTree(), 2 * x + 2, visit);
        }(this, 0, function(node, value){
            node.data = value;
        });
    },

    // 线序遍历二叉树的非递归算法
    preOrderNonRecursive: function(visit){
        var stack = new Stack();
        stack.push(this);

        while(stack.top){
            var p;
            // 向左走到尽头
            while((p = stack.peek())){
                p.data && visit(p.data);
                stack.push(p.leftChild);
            }

            stack.pop();

            if(stack.top){
                p = stack.pop();
                stack.push(p.rightChild);
            }
        }
    },
    inOrder_stack1: function(visit){
        var stack = new Stack();
        stack.push(this);

        while(stack.top){
            var p;
            // 向左走到尽头
            while((p = stack.peek())){
                stack.push(p.leftChild);
            }

            stack.pop();

            if(stack.top){
                p = stack.pop();
                p.data && visit(p.data);
                stack.push(p.rightChild);
            }
        }
    },
    postOrder_stack: function(visit){

    },

    preOrderTraverse: function preOrderTraverse(visit){
        visit(this.data);
        if(this.leftChild) preOrderTraverse.call(this.leftChild, visit);
        if(this.rightChild) preOrderTraverse.call(this.rightChild, visit);
    },
    inPrderTraverse: function inPrderTraverse(visit){
        if(this.leftChild) inPrderTraverse.call(this.leftChild, visit);
        visit(this.data);
        if(this.rightChild) inPrderTraverse.call(this.rightChild, visit);
    },
    postOrderTraverse: function postOrderTraverse(visit){
        if(this.leftChild) postOrderTraverse.call(this.leftChild, visit);
        if(this.rightChild) postOrderTraverse.call(this.rightChild, visit);
        visit(this.data);
    },

    levelOrderTraverse: function(){}
};

var tree = [1, 2, 3, 4, 5, , 6, , , 7];
var test = new BinaryTree;
test.createBinaryTree(tree);
test.preOrderNonRecursive(function(data){
    console.log('preOrderNonRecusive: ' + data);
});
test.preOrderTraverse(function(value){
    console.log('preOrder: ' + value);
});
test.inPrderTraverse(function(value){
    console.log('inOrder: ' + value);
});
test.postOrderTraverse(function(value){
    console.log('postOrder: ' + value);
});
test.inOrder_stack1(function(value){
    console.log('inOrder_stack1: ' + value);
});