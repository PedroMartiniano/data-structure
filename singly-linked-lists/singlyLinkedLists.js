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

    get(index) {
        if (index < 0 || index >= this.length) return undefined

        let current = this.head

        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    set(index, val) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }

    insert(index, val) {
        if (index === this.length) {
            this.push(val)
            return true
        }

        if (index === 0) {
            this.unshift(val)
            return true
        }

        let newNode = new Node(val)

        let leftNode = this.get(index - 1)

        if (!leftNode) return false

        let currentIndexNode = leftNode.next
        leftNode.next = newNode
        newNode.next = currentIndexNode

        this.length++

        return true
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let leftNode = this.get(index - 1)

        if (!leftNode) return undefined

        let node = leftNode.next

        leftNode.next = node.next

        this.length--

        return node
    }

    print() {
        let arr = []

        let current = this.head

        for (let i = 0; i < this.length; i++) {
            arr.push(current.val)
            current = current.next
        }

        return arr
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let next = null
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}

let list = new SinglyLinkedList()

list.push('teste1')
list.push('teste2')
list.push('teste3')

console.log(list)

console.log(list.print())