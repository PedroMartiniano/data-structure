class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let prevFirst = this.first
            this.first = newNode
            this.first.next = prevFirst
        }

        this.size++
        return this.size
    }

    pop() {
        if (this.size === 0) return null

        let first = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            first.next = null
        }

        this.size--
        return first.value
    }
}

let stack = new Stack()

console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))

console.log(stack.pop())

console.log(stack)