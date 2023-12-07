class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) { // push
        let newNode = new Node(val)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue() { // shift
        if (!this.first) return null

        let prevFirst = this.first

        if (this.size === 1) {
            this.last = null
        }

        this.first = this.first.next

        this.size--
        return prevFirst.value
    }
}

let queue = new Queue()

console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue)