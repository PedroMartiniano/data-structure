function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }

    return total
}

// count the operations
// total = 0 -> 1 assignment
// i = 1 -> 1 assignment
// i <= n -> n comparisons
// i++ -> n additions and n assignments
// total += i -> n additons (+) and n assignments (=)

// the operation can be high as 5n + 2
// the number of operations grows roughly proportionally with n

// so we can say that the big O for this operation is O(n)

let t1 = performance.now()
console.log(addUpTo(10000000000))
let t2 = performance.now()

console.log((`Time elapsed: ${((t2 - t1) / 1000).toFixed(6)} seconds`))