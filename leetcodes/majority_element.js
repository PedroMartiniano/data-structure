function majorityElement(nums) {
    frequencyCounter = {}
    for (let i = 0; i < nums.length; i++){
        frequencyCounter[nums[i]] = (frequencyCounter[nums[i]] || 0) + 1
    }
    let bigest = -Infinity
    let keyMajority
    for (val in frequencyCounter) {
        if (frequencyCounter[val] > bigest) {
            bigest = frequencyCounter[val]
            keyMajority = val
        }
    }
    return parseInt(keyMajority)
}

console.log(majorityElement([1, 2, 3, 4, 4]))