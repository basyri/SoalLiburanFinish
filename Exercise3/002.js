/*
    wajib pseudocode. 

    Jawaban pseudocode disini

    FUNCTION soal2(param)
        STORE letter alphabet
        
        IF not equal to 0
            SET current-index to 0
            SET empty array called tampung
            FOR each row on the board
                SET emty array for each row
                FOR each column on the board
                    IF cure=rent-index less than alphabet size THEN
                        CALCULATE 'each row' mod 2
                        IF 'remainder' equal to 0 THEN
                            STORE empty array with letter of alphabet at current-index position
                        ELSE
                            STORE empty array with letter of alphabet at current-index position
                        ENDIF
                    ELSE 
                        SET current-index to 0
                        STORE empty array with letter of alphabet at current-index position
                    ADD current-index by 1
                    ENDIF
            RETURN tampung
        ELSE
            RETURN invalid input

    ENDFUNCTION


    CALL FUNCTION


    
*/

function soal2(param) {
    let arr = []
    let huruf = 'abcdefghijklmnopqrstuvwxyz'
    let num = 0

    for (let i = 0; i < param; i++) {
        let temp = []
        for (let j = 0; j < param; j++) {
            if (num >= 26) {
                num = 0
                temp.push(huruf[num])
            } else {
                temp.push(huruf[num])

            }
            num++
        }
        arr.push(temp)
    }
    return arr
}
console.log(soal2(8))
console.log('\n')
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
console.log('\n')
// /*
//     [
//         ['a','b'],
//         ['c','d']
//     ]
// */

console.log(soal2(0)) // invalid input