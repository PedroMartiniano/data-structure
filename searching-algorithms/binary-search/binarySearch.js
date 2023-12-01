function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    if (start > end) return -1

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === val) return mid

    if (arr[mid] > val) {
        return binarySearch(arr, val, start, mid - 1)
    } else {
        return binarySearch(arr, val, mid + 1, end)
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))

// ----------------------------------------------------------------------

function binarySearch2(arr, x) {
    if (arr.length === 0) return false

    let mid = Math.floor(arr.length / 2)

    if (arr[mid] === x) return true

    if (arr[mid] > x) {
        let leftArr = arr.slice(0, mid)

        return binarySearch2(leftArr, x)
    }
    else {
        let rightArr = arr.slice(mid + 1)

        return binarySearch2(rightArr, x)
    }
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))


// ----------------------------------------------------------------------

function binarySearch3(arr, el) {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)

    while (arr[mid] !== el && start <= end) {

        if (el < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

        mid = Math.floor((start + end) / 2)
    }

    return (arr[mid] === el) ? mid : -1
}

console.log(binarySearch3([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))