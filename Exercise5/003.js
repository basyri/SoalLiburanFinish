function soal3(param1) {
    let arr = []
    let num = 1
    for (let i = 0; i < param1; i++) {
        let temp = []
        for (let j = 0; j < param1; j++) {
            if (i % 2 === 0) {
                temp.push(num)
            } else {
                temp.unshift(num)
            }
            num++
        }
        arr.push(temp)

    }

    return arr
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