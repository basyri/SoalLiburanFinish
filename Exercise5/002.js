function soal2(param) {
    // your code here
    if (param % 2 === 0) {
        console.log('invalid input')
    } else {
        for (var i = 1; i <= (param + 1) / 2; i++) {
            var s = []
            for (var j = 1; j <= ((2 * param) - 1); j++) {
                if (j >= param + 1 - i && j <= param - 1 + i) {
                    s.push("*")
                } else {
                    s.push("")
                }
            }
            console.log(s)
        }

    }
}

soal2(5)
console.log('\n')
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

soal2(3)
console.log('\n')

/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

soal2(4) // invalid input
console.log('\n')

soal2(2) // invalid input
console.log('\n')

soal2(6) // invalid input