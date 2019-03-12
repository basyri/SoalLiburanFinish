function soal3(param) {
    let n = Number(param)
    let num = 1
    let arr = []
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(num)
            num++
        }
        arr.push(temp)
    }

    console.log(arr);

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