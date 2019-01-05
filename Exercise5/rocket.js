function rocket(param) {
    // your code here
    var tampung = []
    for (var i = 0; i < param; i++) {
        tampung[i] = []

        for (var j = 0; j < param; j++) {
            tampung[i].push([i, j])
        }
    }
    return tampung
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/