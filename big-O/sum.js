function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// Here, we are looking just for the space complexity
// type number has a constant space, so O(1)

// here, we have 2 operations of space
// i = 0; i++ -> 1 addtion
// total = 0; total += arr[i] -> 1 addition

// so the complexity is O(1 + 1), that is O(1)

sum([1, 2, 3, 4, 5])