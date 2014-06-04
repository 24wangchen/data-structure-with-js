function BinaryTree() {
    this.Nodes = new Array();
    this.level = 0;
    this.node = 0;

    this.setNode = function (value, level, node) {
        if (level === undefined) {
            this.Nodes[this.btSMF(this.level,
                this.node)] = value;
        } else {
            this.Nodes[this.btSMF(level,
                node)] = value;
        }
    }

    this.getNode = function (level, node) {
        if (level === undefined) {
            return this.Nodes[this.btSMF(this.level,
                this.node)];
        } else {
            return this.Nodes[this.btSMF(level,
                node)];
        }
    }

    this.root = function (value) {
        this.level = 0;
        this.node = 0;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level,
                this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level,
            this.node)];
    }

    this.leftChild = function (value) {
        this.level++;
        this.node = this.node * 2;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level,
                this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level,
            this.node)];
    }

    this.rightChild = function (value) {
        this.level++;
        this.node = this.node * 2 + 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level,
                this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level,
            this.node)];
    }

    this.parent = function (value) {
        this.level--;
        this.node = this.node >> 1;
        if (value !== undefined) {
            this.Nodes[this.btSMF(this.level,
                this.node)] = value;
        }
        return this.Nodes[this.btSMF(this.level,
            this.node)];
    }

    this.btSMF = function (level, node) {
        return node + (1 << level) - 1;
    }
}

function traverse(tree) {
    alert(tree.getNode());
    if (tree.leftChild() !== undefined)traverse();
    tree.parent();
    if (tree.rightChild() !== undefined)traverse();
    tree.parent();
}