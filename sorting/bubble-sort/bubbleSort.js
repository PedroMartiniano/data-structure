function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {

        console.log(`Passa ${i - 1} vezes`)

        // if the arr did no swaps, means the arr is already sorted and no longer need to be iterated, so we stop the loop
        let noSwaps = true

        for (let j = 0; j < i - 1; j++) {

            console.log(arr, arr[j], arr[j + 1])

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }

        if (noSwaps) break
    }

    return arr
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]))