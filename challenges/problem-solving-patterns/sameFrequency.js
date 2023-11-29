function sameFrequency(num1, num2) {
    if (num1 < 0 || num2 < 0) return false

    let frequencyNum1 = {}
    let frequencyNum2 = {}

    num1 = num1.toString()
    num2 = num2.toString()

    if (num1.length !== num2.length) return false

    for (let value of num1) {
        frequencyNum1[value] ? frequencyNum1[value]++ : frequencyNum1[value] = 1
    }

    for (let value of num2) {
        frequencyNum2[value] ? frequencyNum2[value]++ : frequencyNum2[value] = 1
    }

    for (let [k, v] of Object.entries(frequencyNum1)) {
        if (!frequencyNum2[k]) {
            return false
        }

        if (frequencyNum2[k] !== v) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(123, 321))