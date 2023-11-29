function UniqueValues(arr) {
    if (arr.length === 0) return 0

    let obj = {}

    for (val of arr) {
        (obj[val]) ? obj[val] += 1 : obj[val] = 1
    }

    let keys = Object.keys(obj)

    return keys.length
}

console.log(UniqueValues([1, 1, 1, 2, 4, 3, 3, 5, 6, 6, 6, 6, 7, 8]))

function uniqueValues2(arr) {
    if (arr.length === 0) return 0
    
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1
}

console.log(uniqueValues2([1, 1, 1, 2, 4, 3, 3, 5, 6, 6, 6, 6, 7, 8]))