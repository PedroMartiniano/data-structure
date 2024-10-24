package main

import "fmt"

type node struct {
	val  string
	next *node
}

func NewNode(val string) *node {
	return &node{
		val:  val,
		next: nil,
	}
}

type linkedList struct {
	length int
	head   *node
	tail   *node
}

func NewLinkedList() *linkedList {
	return &linkedList{
		length: 0,
		head:   nil,
		tail:   nil,
	}
}

func (l *linkedList) Push(val string) {
	node := NewNode(val)
	if l.head == nil {
		l.head = node
		l.tail = node
	} else {
		l.tail.next = node
		l.tail = node
	}

	l.length++
}

func (l *linkedList) Pop() {
	if l.length <= 0 {
		return
	}

	if l.length == 1 {
		l.tail = nil
		l.head = nil
	} else {
		current := l.head
		for current.next.next != nil {

			current = current.next
		}

		current.next = nil
		l.tail = current
	}

	l.length--
}

func (l *linkedList) Print() {
	list := []string{}
	current := l.head

	for current != nil {
		list = append(list, current.val)
		current = current.next
	}

	fmt.Printf("%+v\n", list)
}

func main() {
	list1 := NewLinkedList()

	list1.Push("1")
	list1.Push("2")
	list1.Push("3")
	list1.Push("4")
	list1.Push("5")
	list1.Push("6")

	list1.Pop()

	list1.Print()
}
