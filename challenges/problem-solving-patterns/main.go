package main

import "fmt"

func main() {
	result := areThereDuplicates(1, 2, 3, 4, 5, "a", "b")
	fmt.Println(result)

	result2 := isPalindrome("wowowow")
	fmt.Println(result2)

	result3 := calculateCost([]int{1, 2, 3, 4, 5}, 2, 2)
	fmt.Println(result3)
}
