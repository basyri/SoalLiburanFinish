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
    let n = Number(param)
    if (n % 2 === 0) {
        console.log('invalid');

    } else {

        for (let i = 0; i < n; i++) {
            let temp = ''
            for (let j = 0; j < n; j++) {
                if (i === Math.floor(n / 2)) {
                    temp += '*'
                } else if (j === 0 || j === n - 1) {
                    temp += '\''
                } else if (j === Math.floor(n / 2)) {
                    temp += '*'
                } else {
                    temp += ' '
                }
            }
            console.log(temp);
        }


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