function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
// the array has a complexity of O(n)

// if the input gets bigger, the newArr will get bigger as the space it occupies
// the space that will be occupied, is directly proporcional to the size of the input arr
// so the complexity here is O(n)

double([1, 2, 3])