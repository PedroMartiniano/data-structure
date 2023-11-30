const isOdd = (val) => val % 2 !== 0

const isEven = (val) => val % 2 === 0

function someRecursive(arr, cb) {
    if (arr.length === 0) return false

    return cb(arr[0]) || someRecursive(arr.slice(1), cb)
}

console.log(someRecursive([1, 2, 3], isOdd))