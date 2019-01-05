function soal3(param) {
    // your code here 
    var tampung = []
    var num = 1
    if (num < param * param) {
        for (var i = 0; i < param; i++) {
            tampung[i] = []
            for (var j = 0; j < param; j++) {
                tampung[i].push(num)
                num++
            }


        }
        console.log(tampung)
    }

}



soal3(5)
console.log('\n')
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

soal3(4)

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/