class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (this.length === 0) return undefined

        let prevTail = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            prevTail.prev = null
        }

        this.length--

        return prevTail
    }

    shift() {
        if (this.length === 0) return undefined

        let prevHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            prevHead.next = null
        }

        this.length--

        return prevHead
    }

    unshift(val) {
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let current
        if (index <= (this.length / 2)) {
            current = this.head

            for (let i = 0; i < index; i++) {
                current = current.next
            }
        } else {
            current = this.tail

            for (let i = this.length - 1; i > index; i--) {
                current = current.prev
            }
        }

        return current
    }
}

let list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)

console.log(list.get(6))