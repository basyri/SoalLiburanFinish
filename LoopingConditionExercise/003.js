/*
    =========
    Triangel
    =========

    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********

    triangel(3)
    output:
        *    
       ***
      *****

*/

function triangel(t) {
    // your code here 
    if (t !== 1) {

        for (var i = 1; i <= t; i++) {
            var tampung = ''
            for (var j = 1; j <= (2 * t - 1); j++) {
                if (j > (2 * t + 1) / 2 - i && j < (2 * t - 1) / 2 + i) {
                    tampung += '*'
                } else {
                    tampung += ' '
                }
            }
            console.log(tampung)
        }
    } else {
        console.log('t is invalid')
    }

}

triangel(3)
console.log('\n')
/*
 *    
 ***
 *****
 */

triangel(5)
console.log('\n')

/*
 *    
 ***
 *****
 *******
 *********
 */

triangel(1) // t is invalid