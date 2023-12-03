class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0

    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        let preTail = null

        while (current.next) {
            preTail = current
            current = current.next
        }

        console.log(current)

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = preTail
            this.tail.next = null
        }

        this.length--

        return current
    }
}

let list = new SinglyLinkedList()

list.push('teste')
// list.push('teste2')
// list.push('teste3')

// list.traverse()

console.log(list.pop())

console.log(list)

// console.log(list.tail)
