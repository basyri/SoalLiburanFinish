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
    let n = Number(param)

    let arr = []
    let num = 0
    let symbol = ['!', '@', '#']
    if (n === 0) {
        return 'invalid input'
    } else {

        for (let i = 0; i < n; i++) {
            if (num > 2) {
                num = 0
                arr.push(symbol[num])
            } else {
                arr.push(symbol[num])
            }
            num++
        }

        return arr
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input