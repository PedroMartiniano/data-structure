function averagePair(arr, average) {
    if (arr.length < 2) return false

    let i = 0
    let j = arr.length - 1

    while (i < j) {
        let thisAverage = (arr[i] + arr[j]) / 2

        if (thisAverage === average) {
            return true
        } else if (thisAverage > average) {
            j--
        } else {
            i++
        }
    }

    return false

}

console.log(averagePair([1, 2, 3, 5], 2.5))