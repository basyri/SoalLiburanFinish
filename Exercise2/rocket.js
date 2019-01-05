/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    // yout code here

    for (var i = 0; i < param; i++) {
        var s = []
        for (var j = 0; j < param; j++) {
            if (j === 0 && i === 0) {
                s.push('*')
            } else if (j === (j / j) + i - 1) {
                s.push('*')
            } else if (j === param - 1 - i) {
                s.push('*')

            } else {
                s.push(' ')
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