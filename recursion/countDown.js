function countDown(num) {
    if (num <= 0) {
        console.log('All Done!')
        return
    }

    console.log(num)
    num--
    countDown(num)
}

countDown(5)

/*
countDown(5)
countDown(4)
countDown(3)
countDown(2)
countDown(1)
countDown(0)
*/