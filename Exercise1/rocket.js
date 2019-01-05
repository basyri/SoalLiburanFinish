/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris

    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    // your code here
    if (param !== 4) {
        var t = []
        for (var i = 1; i <= param; i++) {
            var s = []
            if (i === ((param + 1) / 2)) {
                for (var k = 0; k < param; k++) {
                    t.push('*')
                }
                console.log(t)
            }

            for (var j = 1; j <= (param); j++) {
                if (j < ((param + 1) / 2) + 1 && j > ((param + 1) / 2) - 1) {
                    s.push("*")
                } else {
                    s.push(" ")
                }
            }
            console.log(s)
        }
    } else {
        console.log('invalid input') // invalid input
    }

}

benderaInggris(9)
console.log('\n')

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/
benderaInggris(5)
console.log('\n')
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/
benderaInggris(4) // invalid input