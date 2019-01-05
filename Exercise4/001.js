function soal1(param) {
    // Your Code Here
    var tampung = []
    // for (var i = 0; i < param; i++) {
    for (var j = 1; j <= param; j++) {
        if (j % 4 === 0) {
            tampung.push('Buzz')
        } else if (j % 7 === 0) {
            tampung.push('Fizz')

        } else {
            tampung.push('')

        }
    }
    // }
    return tampung
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']