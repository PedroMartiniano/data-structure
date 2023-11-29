function factorial(num) {
    if(num <= 1) return 1

    return num * factorial(num - 1)
}

console.log(factorial(2))

/*
factorial(4) = 24
4 * factorial(3) -> 6 = 24
3 * factorial(2) -> 2 = 6
2 * factorial(1) -> 1 = 2
1
*/
