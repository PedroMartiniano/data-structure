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

    set(index, val) {
        let node = this.get(index)

        if (!node) return false

        node.val = val
        return true
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false

        if (index === 0) {
            this.unshift(val)
            return true
        }

        if (index === this.length) {
            this.push(val)
            return true
        }

        let newNode = new Node(val)

        let indexNode = this.get(index)
        if (!indexNode) return false

        newNode.next = indexNode
        newNode.prev = indexNode.prev
        indexNode.prev.next = newNode
        indexNode.prev = newNode

        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false

        if (index === 0) return this.shift()
        
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)

        if (!removedNode) return undefined

        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev

        removedNode.prev = null
        removedNode.next = null
        this.length--
        return removedNode
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

console.log(list)