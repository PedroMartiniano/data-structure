function sumRange(num) {
    if (num === 1) return 1

    return num + sumRange(num - 1)
}

console.log(sumRange(5))

// sumRange(5)
// 5 + sumRange(4) -> 10 = 15
// 4 + sumRange(3) -> 6 = 10
// 3 + sumRange(2) -> 3 = 6
// 2 + sumRange(1) -> 1 = 3
// 1