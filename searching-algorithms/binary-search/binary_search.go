package main

import (
	"fmt"
	"math"
)

func binarySearch(nums []int, target int) int {
	if len(nums) == 0 {
		return -1
	}

	mid := int(math.Floor(float64(len(nums) / 2)))
	if nums[mid] == target {
		return mid
	}

	if nums[mid] > target {
		return binarySearch(nums[:mid], target)
	} else {
		return binarySearch(nums[mid+1:], target)
	}
}

func binarySearch2(nums []int, target int) int {
	if len(nums) == 0 {
		return -1
	}

	start := 0
	end := len(nums) - 1

	for start <= end {
		mid := int(math.Floor(float64(start+end) / 2))

		if nums[mid] == target {
			return mid
		}

		if nums[mid] > target {
			end = mid - 1
		} else {
			start = mid + 1
		}
	}

	return -1
}

func main() {
	fmt.Println(binarySearch2([]int{5}, 5))
}
