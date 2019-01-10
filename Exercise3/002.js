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
    var a = 'abcdefghijklmnopqrstuvwxyz'

    if (param !== 0) {
        var currentIndex = 0
        var tampung = []
        for (var i = 0; i < param; i++) {
            tampung[i] = []
            for (var j = 0; j < param; j++) {
                if (currentIndex < a.length) {
                    tampung[i].push(a[currentIndex])
                } else {
                    currentIndex = 0
                    tampung[i].push(a[currentIndex])
                }
                currentIndex++
            }
        }
        return tampung
    } else {
        return ' invalid input'
    }
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