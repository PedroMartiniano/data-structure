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

    shift() {
        if (!this.head) return undefined

        let latestHead = this.head

        this.head = latestHead.next

        if (this.length === 1) {
            this.tail = null
        }

        this.length--

        return latestHead
    }

    unshift(val) {
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }
}

let list = new SinglyLinkedList()

list.push('teste1')
list.push('teste2')
list.push('teste3')

console.log(list)

console.log(list.unshift('teste0'))