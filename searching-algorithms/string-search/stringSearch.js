function stringSearch(str, substr) { // precisa arrumar esse aqui
    if (str.length < substr.length) return 0

    let count = 0
    let j = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr[j]) {

            if (j === substr.length - 1) {
                count++
                j = 0
            } else {
                j++
            }

        } else {
            j = 0
        }
    }

    return count
}

console.log(stringSearch('llolrie loled', 'lol'))

// -----------------------------------------------------------

function naiveSearch(long, short) {
    if (short.length > long.length) return 0
    let total = 0

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] === short[j]) {

                (j === short.length - 1) && total++

            } else {
                break
            }
        }
    }

    return total
}

console.log(naiveSearch('llolorie loled', 'lol'))
