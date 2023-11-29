// function maxSum(arr, x) {
//     if (arr.length < x) {
//         return null
//     }

//     let max = -Infinity
//     for (let i = 0; i < arr.length - x + 1; i++) {
//         let sum = 0
//         for (let j = 0; j < x; j++) {
//             console.log(arr[i + j])
//             sum += arr[i + j]
//         }

//         if (sum > max) {
//             max = sum
//         }
//     }

//     return max
// }

// console.log(maxSum([1, 2, 5, 3, 1], 2))


function maxSubArraySum(arr, num) {
    if (arr.length < num) return null

    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = (tempSum > maxSum) ? tempSum : maxSum
    }

    return maxSum
}

console.log(maxSubArraySum([1, 2, 5, 3, 1], 3))
