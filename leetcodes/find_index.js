function findStrIndex(str, subStr) {
    if (str.length < subStr.length) return -1

    let j = 0
    let firstIndex = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] == subStr[j]) {
            if (j == 0) firstIndex = i
            if (j == subStr.length - 1) break
            if (i == str.length - 1) break
            j++
        } else {
            if (j != 0) i = firstIndex
            j = 0
        }
    }

    return (j == subStr.length - 1) ? firstIndex : -1
}

console.log(findStrIndex("sadbutsad", "tsa"))