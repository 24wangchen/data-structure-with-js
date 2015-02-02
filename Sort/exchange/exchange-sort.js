/**
 * Created by Luke on 2015/2/2.
 */

var Stack = require('../../Stack/stack');

/*
 交换排序

 是一类基于交换的排序，系统地交换反序的记录的偶对，直到不再有这样的偶对为止。其中最基本的是冒泡排序(Bubble Sort)。

 冒泡排序
 1  排序思想
 依次比较相邻的两个记录的关键字，若两个记录是反序的(即前一个记录的关键字大于后前一个记录的关键字)，则进行交换，直到没有反序的记录为止。
     ① 首先将L->R[1]与L->R[2]的关键字进行比较，若为反序(L->R[1]的关键字大于L->R[2]的关键字)，则交换两个记录；然后比较L->R[2]与L->R[3]的关键字，依此类推，直到L->R[n-1]与L->R[n]的关键字比较后为止，称为一趟冒泡排序，L->R[n]为关键字最大的记录。
     ②  然后进行第二趟冒泡排序，对前n-1个记录进行同样的操作。
 一般地，第i趟冒泡排序是对L->R[1 … n-i+1]中的记录进行的，因此，若待排序的记录有n个，则要经过n-1趟冒泡排序才能使所有的记录有序。

 2  排序示例
 设有9个待排序的记录，关键字分别为23, 38, 22, 45, 23, 67, 31, 15, 41

 初始关键字序列:  23    38     22     45     23     67     31     15    41
 第一趟排序后:    23    22     38     23     45     31     15     41    67
 第二趟排序后:    22    23     23     38     31     15     41     45    67
 第三趟排序后:    22    23     23     31     15     38     41     45    67
 第四趟排序后:    22    23     23     15     31     38     41     45    67
 第五趟排序后:    22    23     15     23     31     38     41     45    67
 第六趟排序后:    22    15     23     23     31     38     41     45    67
 第七趟排序后:    15    22     23     23     31     38     41     45    67

3.算法分析
 时间复杂度
 ◆  最好情况(正序)：比较次数：n-1；移动次数：0；
 ◆  最坏情况(逆序)：
 比较次数： n * (n - 1) / 2
 移动次数： 3*n*(n - 1) / 2

 故时间复杂度：T(n)=O(n²)
 空间复杂度：S(n)=O(1)

 */

function bubbleSort(sqList){
    for(var i = 1, len = sqList.length; i < len; ++i){
        var change = 0;

        for(var j = 0; j <= len - i; ++j){
            if(sqList[j + 1] < sqList[j]) {
                change = 1;
                var temp = sqList[j];
                sqList[j] = sqList[j + 1];
                sqList[j + 1] = temp;
            }
        }

        if(!change) break;
    }
}
exports.bubbleSort = bubbleSort;


var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
bubbleSort(arr);
console.log('bubbleSort:\n' + arr + '');


// 冒泡改进1
function bubbleSort1(sqList){
    var len = sqList.length;
    var change = len - 1;

    while(change){
        for(var c = 0, i = 0; i < change; ++i){
            if(sqList[i] > sqList[i + 1]) {
                var temp = sqList[i];
                sqList[i] = sqList[i + 1];
                sqList[i + 1] = temp;
                // c指示这一趟冒泡中发生交换的元素
                c = i + 1;
            }
        }

        change = c;
    }
}
exports.bubbleSort1 = bubbleSort1;

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
bubbleSort1(arr);
console.log('bubbleSort1:\n' + arr + '');


// 相邻两趟反方向起泡的冒泡排序算法
function bubbleSort2(sqList){
    var len = sqList.length;
    // 冒泡上下界
    var low = 0, high = len - 1;
    var change = 1;
    var temp;

    while(low < high && change){
        change = 0;

        // 从上向下起泡
        for(var i = low; i < high; ++i){
            if(sqList[i] > sqList[i + 1]) {
                temp = sqList[i];
                sqList[i] = sqList[i + 1];
                sqList[i + 1] = temp;
                change = 1;
            }
        }
        // 修改上界
        --high;

        // 从下向上起泡
        for(i = high; i > low; --i){
            if(sqList[i] < sqList[i - 1]) {
                temp = sqList[i];
                sqList[i] = sqList[i - 1];
                sqList[i - 1] = temp;
                change = 1;
            }
        }
        // 修改下界
        ++low;
    }
}
exports.bubbleSort2 = bubbleSort2;

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
bubbleSort2(arr);
console.log('bubbleSort2:\n' + arr + '');


// 改进3
function bubbleSort3(sqList){
    var b = {};
    var len = sqList.length;
    // d为冒泡方向标识， 1为向上，-1为向下
    var d = 1;
    // b[0]为冒泡上界，b[2]为冒泡上界，b[1]无用
    b[0] = 0;
    b[2] = len - 1;
    var change = 1;

    while(b[0] < b[2] && change){
        change = 0;

        // 统一的冒泡算法
        for(var i = b[1 - d]; i !== b[1 + d]; i += d){
            // 注意这个交换条件
            if((sqList[i] - sqList[i + d]) * d > 0){
                var temp = sqList[i];
                sqList[i] = sqList[i + d];
                sqList[i + d] = temp;
                change = 1;
            }
        }

        // 修改边界
        b[1 + d] -= d;
        // 换个方向
        d *= -1;
    }
}
exports.bubbleSort3 = bubbleSort3;

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
bubbleSort3(arr);
console.log('bubbleSort3:\n' + arr + '');



/*
 快速排序

 1  排序思想
 通过一趟排序，将待排序记录分割成独立的两部分，其中一部分记录的关键字均比另一部分记录的关键字小，再分别对这两部分记录进行下一趟排序，以达到整个序列有序。

 2  排序过程
 设待排序的记录序列是R[s…t] ，在记录序列中任取一个记录(一般取R[s])作为参照(又称为基准或枢轴)，以R[s].key为基准重新排列其余的所有记录，方法是：
     ◆ 所有关键字比基准小的放R[s]之前；
     ◆ 所有关键字比基准大的放R[s]之后。
 以R[s].key最后所在位置i作为分界，将序列R[s…t]分割成两个子序列，称为一趟快速排序。

 3  一趟快速排序方法
 从序列的两端交替扫描各个记录，将关键字小于基准关键字的记录依次放置到序列的前边；而将关键字大于基准关键字的记录从序列的最后端起，依次放置到序列的后边，直到扫描完所有的记录。

 设置指针low，high，初值为第1个和最后一个记录的位置。
 设两个变量i，j，初始时令i=low，j=high，以R[low].key作为基准(将R[low]保存在R[0]中) 。
 ① 从j所指位置向前搜索：将R[0].key与R[j].key进行比较：
    ◆  若R[0].key≤R[j].key ：令j=j-1，然后继续进行比较， 直到i=j或R[0].key>R[j].key为止；
    ◆ 若R[0].key>R[j].key ：R[j]R[i]，腾空R[j]的位置， 且令i=i+1；
 ② 从i所指位置起向后搜索：将R[0].key与R[i].key进行比较：
    ◆ 若R[0].key≥R[i].key ：令i=i+1，然后继续进行比较， 直到i=j或R[0].key<R[i].key为止；
    ◆ 若R[0].key<R[i].key ：R[i]R[j]，腾空R[i]的位置， 且令j=j-1；
 ③ 重复①、②，直至i=j为止，i就是R[0](基准)所应放置的位置。

 算法分析
 快速排序的主要时间是花费在划分上，对长度为k的记录序列进行划分时关键字的比较次数是k-1 。设长度为n的记录序列进行排序的比较次数为C(n)，则C(n)=n-1+C(k)+C(n-k-1) 。
 ◆  最好情况：每次划分得到的子序列大致相等，则
 C(n)<=h×n+2h×C(n/2h) ，当n/2h=1时排序结束。
 即C(n)≤O(n×㏒2n) ；
 ◆  最坏情况：每次划分得到的子序列中有一个为空，另一个子序列的长度为n-1。即每次划分所选择的基准是当前待排序序列中的最小(或最大)关键字。
 比较次数：:  即C(n)=O(n2)
 ◆  一般情况： 对n个记录进行快速排序所需的时间T(n)组成是：
     ① 对n个记录进行一趟划分所需的时间是：n×C ，C是常数；
     ② 对所得到的两个子序列进行快速排序的时间：
        Tavg(n)=C(n)+Tavg(k-1)+Tavg(n-k)          ……

 快速排序的平均时间复杂度是：T(n)=O(n㏒2n)
 从所需要的附加空间来看，快速排序算法是递归调用，系统内用堆栈保存递归参数，当每次划分比较均匀时，栈的最大深度为[㏒2n]+1 。

 快速排序的空间复杂度是：S(n)=O(㏒2n)
 从排序的稳定性来看，快速排序是不稳定的。

 */

function partition(sqList, low, high){
    var temp = sqList[low];

    while(low < high){
        while(low < high && sqList[high] >= temp) --high;
        sqList[low] = sqList[high];
        while(low < high && sqList[low] <= temp) ++low;
        sqList[high] = sqList[low];
    }

    sqList[low] = temp;

    return low;
}

function quickSortRecursive(sqList, low, high){
    low = low || 0;
    high = high || sqList.length - 1;

    if(low < high) {
        var k = partition(sqList, low, high);
        quickSortRecursive(sqList, low, k - 1);
        quickSortRecursive(sqList, k + 1, high);
    }
}
exports.quickSortRecursive = quickSortRecursive;

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
quickSortRecursive(arr);
console.log('quickSortRecursive:\n' + arr + '');


function quickSortNonRecursive(sqList, low, high){
    low = low || 0;
    high = high || sqList.length - 1;
    var stack = new Stack();
    var k;

    do {
        while(low < high){
            k = partition(sqList, low, high);
            // 第二个子序列的上,下界分别入栈
            stack.push(high);
            stack.push(k + 1);
            high = k - 1;
        }

        if(stack.length) {
            low = stack.pop();
            high = stack.pop();
        }
    } while(stack.length || low < high);
}
exports.quickSortNonRecursive = quickSortNonRecursive;

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
quickSortNonRecursive(arr);
console.log('quickSortNonRecursive:\n' + arr + '');

function quickSort(sqList, low, high){
    low = low || 0;
    high = high || sqList.length - 1;
    var stack = new Stack();
    var pivot;

    do {
        if(high - low > 2) {
            pivot = partition(sqList, low, high);

            if(high - pivot > pivot - low) {
                stack.push(high);
                stack.push(pivot + 1);
                high = pivot - 1;
            } else {
                stack.push(pivot - 1);
                stack.push(low);
                low = pivot + 1;
            }
        } else if(low < high && high - low < 3) {
            easySort(sqList, low, high);
            low = high;
        } else {
            low = stack.pop();
            high = stack.pop();
        }
    } while(stack.length || low < high);
}
exports.quickSort = quickSort;

function easySort(sqList, low, high){
    var temp;

    if(high - low === 1) {
        if(sqList[low] > sqList[high]) {
            temp = sqList[low];
            sqList[low] = sqList[high];
            sqList[high] = temp;
        }
    } else {
        if(sqList[low] > sqList[low + 1]) {
            temp = sqList[low];
            sqList[low] = sqList[low + 1];
            sqList[low + 1] = temp;
        }
        if(sqList[low + 1] > sqList[high]) {
            temp = sqList[low + 1];
            sqList[low + 1] = sqList[high];
            sqList[high] = temp;
        }
        if(sqList[low] > sqList[low + 1]) {
            temp = sqList[low];
            sqList[low] = sqList[low + 1];
            sqList[low + 1] = temp;
        }
    }
}

var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
quickSort(arr);
console.log('quickSort:\n' + arr + '');