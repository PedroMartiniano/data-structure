function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue

            if (nums[i] + nums[j] == target) {
                return [i, j]
            }

        }
    }

    return []
}

console.log(twoSum([3, 3], 6))

// ---------------------------------------------------

function twoSum2(nums, target) {
    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (complement in hashMap) {
            return [hashMap[complement], i]
        }

        hashMap[nums[i]] = i
    }

    return []
}

console.log(twoSum2([2, 15, 7, 3, 1], 9))

// ----------------------------------------

function quickSort(nums) {
    if (nums.length <= 1) return nums

    let left = []
    let pivot = nums[0]
    let right = []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

function twoSum3(nums, target) {
    if (nums.length == 0) return []

    let hashMap = {}
    for (let i = 0; i < nums.length; i++) hashMap[nums[i]] = i

    let sortedArr = quickSort(nums)

    let i = 0
    let j = sortedArr.length - 1
    while (i < j) {
        let sum = sortedArr[i] + sortedArr[j]
        if (sum == target) return [hashMap[sortedArr[i]], hashMap[sortedArr[j]]]
        sum > target ? j-- : i++
    }

    return []
}

console.log(twoSum3([2, 15, 7, 3, 1], 9))
