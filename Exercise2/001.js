/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 

    FUNCTION soal1(param)
        STORE symbol to ['!', '@', '#', '!', '@', '#']
        
        IF param not equal to 0
            SET empty array called tampung
            STORE num to 0
                FOR each column until less than param 
                    STORE empty array with symbol value at num as index
                    ADD num by 1
                ENDFOR
            RETURN tampung
        ELSE
            RETURN invalid input
    ENDFUNCTION

    SHOW FUNCTION

*/
function soal1(param) {
    // your code here
    var symbol = ['!', '@', '#', '!', '@', '#']

    if (param !== 0) {
        var tampung = []
        var num = 0
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