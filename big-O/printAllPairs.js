function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) { // nested loop
            console.log(i, j)
        }
    }
}

printAllPairs(5)

// the function has a nested loop, both loops depends of the n number, then the notation will be O(n*n), so, O(n²)
// if the inside loop had a fixed value, by example j < 5, the notation will be O(n), because the growing executions would depends only of the external loop