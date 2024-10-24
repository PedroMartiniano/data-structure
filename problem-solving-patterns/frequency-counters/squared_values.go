package main

import "fmt"

func squaredValues(nums []int, squaredNums []int) bool {
	if len(nums) != len(squaredNums) {
		return false
	}

	frequencyNums := make(map[int]int)
	frequencySquaredNums := make(map[int]int)

	for _, val := range nums {
		if frequencyNums[val] == 0 {
			frequencyNums[val] = 1
		} else {
			frequencyNums[val]++
		}
	}

	for _, val := range squaredNums {
		if frequencySquaredNums[val] == 0 {
			frequencySquaredNums[val] = 1
		} else {
			frequencySquaredNums[val]++
		}
	}

	for k, _ := range frequencyNums {
		if frequencySquaredNums[k*k] == 0 {
			return false
		}

		if frequencyNums[k] != frequencySquaredNums[k*k] {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(squaredValues([]int{1, 2, 3}, []int{1, 4, 9}))
}
