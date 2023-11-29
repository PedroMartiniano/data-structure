function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    let objStr1 = {}
    let objStr2 = {}

    for (const val of str1) {
        // differents ways to do the same thing
        objStr1[val] ? objStr1[val] += 1 : objStr1[val] = 1
    }

    for (const val of str2) {
        // differents ways to do the same thing
        objStr2[val] = (objStr2[val] || 0) + 1
    }

    for (const [key, value] of Object.entries(objStr1)) {
        if (!objStr2[key]) {
            return false
        }

        if (objStr2[key] !== value) {
            return false
        }
    }

    return true
}

// console.log(anagram('awe', 'AWE'))

// secound way

function anagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let lookup = {}

    for (const char of str1) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1
    }

    for (let char of str2) {
        console.log(lookup)
        // if cant find letter or value of the letter is zero return false
        if (!lookup[char]) {
            return false
        } else {
            lookup[char] -= 1
        }
    }

    return true
}

console.log(anagram2('pedro', 'ordep'))