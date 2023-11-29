function fib(range) {
    let i = 3
    function helper(prev, actual) {
        if (i > range) return actual

        i++

        let next = prev + actual

        return helper(actual, next)
    }

    return helper(1, 1)
}

console.log(fib(35))

// ---------------------------

function fib2(n) {
    if(n <= 2) return 1

    return fib(n - 1) + fib(n - 2)
}

console.log(fib2(35))
