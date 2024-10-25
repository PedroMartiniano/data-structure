class Node {
    constructor(value) {
        this.value = value
        this.frequency = 1 // a way to handle duplicate itens, you can ignore then too
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let node = new Node(val)

        if (!this.root) {
            this.root = node
            return this
        }

        let current = this.root
        while (true) {
            if (val > current.value) {
                if (!current.right) {
                    current.right = node
                    break
                }
                current = current.right
                continue
            } else if (val < current.value) {
                if (!current.left) {
                    current.left = node
                    break
                }
                current = current.left
                continue
            } else {
                current.frequency++
                return this
            }
        }

        return this
    }

    find(val) {
        if (!this.root) {
            return null
        }

        let current = this.root
        while (true) {
            if (val === current.value) return current

            if (val > current.value) {
                if (!current.right) return null
                current = current.right
                continue
            } else {
                if (!current.left) return null
                current = current.left
                continue
            }
        }
    }
}

var tree = new BinarySearchTree()


tree.insert(5)
tree.insert(3)
tree.insert(8)
tree.insert(7)
tree.insert(5)
tree.insert(4)

console.log(tree.find(5))
console.log(tree.find(4))
console.log(tree.find(7))