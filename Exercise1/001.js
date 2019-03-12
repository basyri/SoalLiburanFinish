function soal1(param) {
    if (param === 0) {
        return 'invalid input'
    } else {
        let temp = []
        if (param % 2 !== 0) {
            for (let i = 0; i < param; i++) {
                if (i === Math.floor(param / 2)) {
                    temp.push('*')
                } else {
                    temp.push('')
                }
            }

            return temp
        } else {
            for (let i = 0; i < param; i++) {
                if (i <= param / 2 && i >= (param / 2) - 1) {
                    temp.push('*')
                } else {
                    temp.push('')
                }
            }

            return temp

        }
    }
}

// test case
console.log(soal1(5))
/*
    output : 
                            ['','','*','','']

*/
console.log(soal1(4)) //    ['','*','*','']

console.log(soal1(7)) //    ['','','','*','','','']

console.log(soal1(10)) //   ['','','','','*','*','','','','']

console.log(soal1(0)) // invalid input 

console.log(soal1(1)) // ['*']