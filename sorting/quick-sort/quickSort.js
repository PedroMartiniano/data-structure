function quickSort(arr) {
    if (arr.length === 0) return []

    let left = []
    let right = []
    let pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        (pivot > arr[i])
            ? left.push(arr[i])
            : right.push(arr[i])
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([6, 2, 4, 7, 1, 6, 2, 4, 3, 9, 8]))