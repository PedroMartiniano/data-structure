package main

// get the total cost
// get the pair cost n times
// every time I get the pair cost, i need to remove the first and last index

func calculateCost(costs []int, pairCosts int, k int) int {
	totalCost := 0

	for _, cost := range costs {
		totalCost += cost
	}

	pairCostsArr := make([]int, k)

	j := len(costs) - 1
	for i := 0; i < k; i++ {
		pairCostsArr[i] = pairCosts
		costs = costs[i+1 : j]
		j--
	}

	newCosts := append(costs, pairCostsArr...)

	costsWithPairs := 0
	for _, cost := range newCosts {
		costsWithPairs += cost
	}

	if costsWithPairs < totalCost {
		return costsWithPairs
	}
	return totalCost
}
