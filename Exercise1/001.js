function soal1(param) {
    // your code here 

    var s = []
    if (param !== 0) {
        for (var i = 1; i <= param; i++) {

            if (i < ((param + 1) / 2) + 1 && i > ((param + 1) / 2) - 1) {
                s.push('*')
            } else {
                s.push('')
            }
        }
        return s
    } else {
        return 'invalid input'
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