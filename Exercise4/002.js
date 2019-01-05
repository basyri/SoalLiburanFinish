function soal2(param) {
    // your code here
    if (param[i] === '' || param.length < 3) {
        return 'Invalid input'
    } else {
        var tampol = []
        for (var i = 0; i < param.length; i++) {
            if (i === 0 || i === param.length - 1) {
                tampol.push(param[i])
            } else if (i === Math.floor(param.length / 2)) {
                tampol.push(param[0] * param[param.length - 1])
            } else if (param[i] !== '') {
                tampol.push(param[i])
            } else {
                tampol.push('')

            }
        }
        return tampol
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