function areThereDuplicates() {
    if (arguments.length === 0) return false

    let objArguments = {}

    for (let [key, value] of Object.entries(arguments)) {
        objArguments[value] ? objArguments[value]++ : objArguments[value] = 1
    }

    for (let value of Object.values(objArguments)) {
        if (value > 1) return true
    }

    return false
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 'a', 'b', 2))

function areThereDuplicates2() {
    return new Set(arguments).size !== arguments.length
}

// console.log(areThereDuplicates2(1, 2, 3, 4, 5, 6, 'a', 'b', 2))
