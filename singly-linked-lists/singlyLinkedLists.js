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
}

let list = new SinglyLinkedList()

console.log(list.push('teste'))
console.log(list.push('teste2'))
console.log(list.push('teste3'))

console.log(list.tail)

// let first = new Node('Hi')
// first.next = new Node('There')
// first.next.next = new Node('How')
// first.next.next.next = new Node('Are')
// first.next.next.next.next = new Node('You')

// console.log(first.next.next)