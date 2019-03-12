/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    temp = ''
    for (let j = 0; j < param; j++) {
        if (j === 0 || j === param - 1) {
            temp += '\''
        } else {
            temp += ' '
        }
    }

    console.log(temp);

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