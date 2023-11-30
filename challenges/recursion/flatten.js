function flatten(arr) {
    if (arr.length === 0) return []

    const newArr = []

    if (typeof arr[0] === 'object') {
        newArr.push(...flatten(arr[0]))
    } else {
        newArr.push(arr[0])
    }

    return [...newArr, ...flatten(arr.slice(1))]
}

console.log(flatten([[[[1]]], [2, 3], [4, [[[5]]]]]))