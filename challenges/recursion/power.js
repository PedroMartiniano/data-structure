function power(num, pow) {
    if (pow === 0) return 1

    return num * power(num, pow - 1)
}

console.log(power(2, 3))

/*
power(2, 3) -> 8
    2 * power(2, 2) -> 4 = 8
        2 * power(2, 1) -> 2 = 4
            2 * power(2, 0) -> 1 = 2
                1
*/