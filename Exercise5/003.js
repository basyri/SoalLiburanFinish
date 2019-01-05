function soal3(param1) {
    var currentNum = 1
    var tampung = []
    for (var i = 0; i < param1; i++) {
        tampung[i] = []
        for (var j = 0; j < param1; j++) {
            if ((i % 2) === 0) {
                tampung[i].push(currentNum)
            } else {
                tampung[i].unshift(currentNum)
            }
            currentNum++

        }

    }

    return tampung
}

console.log(soal3(3))
console.log('\n')
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
console.log('\n')
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/