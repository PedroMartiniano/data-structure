function countUpAndDown(n) {
    console.log('Going up!')
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }

    console.log('At the top!\nGoing Down...')
    for (let j = n; j >= 0; j--) {
        console.log(j)
    }
    console.log('Back down. Bye!')
}

countUpAndDown(10)

// theres 2 O(n) notations on the function
// but as we simplified, the Big O Notation of O(2n) for this function will be O(n)!