/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {

    for (var i = 0; i < param - 2; i++) {
        var s = ''
        for (var j = 0; j < param; j++) {
            if (j === 0 || j === param - 1) {
                s += '\''
            } else if (i === j - 1) {
                s += '*'
            } else if (j === param - 2 - i) {
                s += '*'

            } else {
                s += ' '
            }

        }
        console.log(s)
    }

}

scotlandFlag(5)
console.log('\n')

/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

scotlandFlag(9)
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/