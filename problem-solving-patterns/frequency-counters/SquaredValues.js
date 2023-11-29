function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }

        arr2.splice(correctIndex, 1)
    }

    return true
}

// console.log(same([1, 2, 1], [1, 4, 1]))

function same2(arr1, arr2) {
    // verfica se os dois arr tem o mesmo length
    if (arr1.length !== arr2.length) {
        return false
    }

    // inicializa os dois objetos que serão os frequency countes / indexação do arr
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // loop pelo arr para criar atributos ou adicionar +1 ao atributo existe dentro do obj
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    // for dentro do primeiro objeto
    for (let key in frequencyCounter1) {
        // verifica se existe o valor ao quadrado no segundo objeto
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        // depois de verificar a existencia, verifica se os dois tem a mesma ocorrencia
        // está comparando o value de cada key
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

console.log(same2([1, 2, 3], [1, 4, 9]))