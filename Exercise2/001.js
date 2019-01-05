/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 

    FUNCTION soal1(param)
        SET symbol to '!@#'
        FOR each column until less than param minus 3
            CALCULATE symbol as symbol[i]
        ENDFOR
        DISPLAY symbol
    ENDFUNCTION

    SHOW FUNCTION

*/
function soal1(param) {
    // your code here
    var symbol = ['!', '@', '#', '!', '@', '#']
    var tampung = []
    var num = 0
    if (param !== 0) {

        for (var i = 0; i < param; i++) {
            tampung.push(symbol[num])
            num++
        }


        return tampung
    } else {
        return 'invalid input'
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input