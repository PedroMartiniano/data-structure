function isPalindrome(str) {
    if (str.length === 0) return true

    function reverseStr(strInner) {
        if(strInner.length === 0) return ''

        return strInner[strInner.length - 1] + reverseStr(strInner.slice(0, strInner.length - 1))
    }

    const reversedStr = reverseStr(str)

    return (str === reversedStr) ? true : false
}

console.log(isPalindrome(''))