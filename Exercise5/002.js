function soal2(param) {
    if (param % 2 === 0) {
        console.log('Invalid');

    } else {

        let arr = []
        for (let i = 0; i < Math.ceil(param / 2); i++) {

            let temp = []
            for (let j = 0; j < param; j++) {
                if (j <= Math.floor(param / 2) + i && j >= Math.floor(param / 2) - i) {
                    temp.push('*')
                } else {
                    temp.push('')
                }
            }
            arr.push(temp);
        }
        console.log(arr);
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