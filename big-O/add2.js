function addUpTo2(n) {
    return n * (n + 1) / 2
}

// counting the operations
// * -> 1 operation
// + -> 1 addition
// / -> 1 operation

// there will be always just 3 operations on this function

// so we can say that the big O of this operation is O(1)

let t1 = performance.now()
console.log(addUpTo2(1000000000))
let t2 = performance.now()

console.log((`Time elapsed: ${((t2 / t1) /1000).toFixed(6)}`))