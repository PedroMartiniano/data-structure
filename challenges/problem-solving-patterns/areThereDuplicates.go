package main

func areThereDuplicates(args ...any) bool {
	countObj := make(map[any]int)
	for _, value := range args {
		if countObj[value] == 0 {
			countObj[value] = 1
		} else {
			countObj[value]++
		}
	}
	for _, value := range countObj {
		if value > 1 {
			return true
		}
	}
	return false
}