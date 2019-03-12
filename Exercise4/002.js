function soal2(param) {
    let arr = []

    if (param.length < 3) {
        return 'Invalid'
    } else if (param.length % 2 === 0) {
        for (let i = 0; i < param.length; i++) {
            if (i <= Math.floor(param.length / 2) && i >= Math.floor(param.length / 2) - 1) {
                arr.push(param[0] * param[param.length - 1])
            } else if (i === 0) {
                arr.push(param[0])

            } else if (i === param.length - 1) {
                arr.push(param[param.length - 1])
            } else {
                arr.push('')
            }
        }

        return arr
    } else {
        for (let i = 0; i < param.length; i++) {
            if (i === Math.floor(param.length / 2)) {
                arr.push(param[0] * param[param.length - 1])
            } else if (i === 0) {
                arr.push(param[0])

            } else if (i === param.length - 1) {
                arr.push(param[param.length - 1])
            } else if (param[i] !== '') {
                arr.push(param[i])

            } else {
                arr.push('')
            }
        }

        return arr
    }
}

console.log(soal2([34, '', '', '', 40]))
// [34,''1360,'',40]

console.log(soal2([1, 2, 3, 4, 5]))
// [1,2,5,4,5]

console.log(soal2([20, '', '', '', '', '', '', 30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6, '', '', '', '', '', 9]))
// [6,'','',54,'','',9]

console.log(soal2([1, 2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input