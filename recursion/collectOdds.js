function collectOddsValues(arr) {
    let result = []

    function helper(helperInput) { // recursive function
        if (helperInput.length === 0) { // base case
            return
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) // recursion cutting the first element of the array
    }

    helper(arr)

    return result
}

console.log(collectOddsValues([1, 2, 3, 4, 5]))

/*
collectOddsValues([1, 2, 3, 4, 5])
let arr = []
    helper([1, 2, 3, 4, 5]) -> arr.push(1)
        helper([2, 3, 4, 5]) -> pair
            helper([3, 4, 5]) -> arr.push(3)
                helper([4, 5]) -> pair
                    helper([5]) -> arr.push(5)
                        helper([]) -> base case
arr = [1, 3, 5]
*/

function collectOddsValues2(arr) {
    let newArr = []

    if (arr.length === 0) return newArr

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    return [...newArr, ...collectOddsValues2(arr.slice(1))]
}

console.log(collectOddsValues2([1, 2, 3, 4, 5]))


/*
collectOddsValues2([1, 2, 3, 4, 5]) - > [1, 3, 5]
    [1, collectOddsValues2([2, 3, 4, 5])]  -> [1, 3, 5]
        [ , collectOddsValues2([3, 4, 5])] -> [3, 5]
            [3, collectOddsValues2([4, 5])] -> [3, 5]
                [ , collectOddsValues2([5])] - > [5]
                    [5, collectOddsValues2([])] -> [5]
                        [] -> base case
[1, 3, 5]
*/