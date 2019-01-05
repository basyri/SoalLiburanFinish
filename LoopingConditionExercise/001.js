/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

function generateBar(p, t) {
    // your code here
    if (p > t) {
        for (var h = 0; h < t; h++) {
            var tampung = ''
            for (var i = 0; i < p; i++) {
                if (h === 0) {
                    tampung += 'o'
                } else if (i === 0) {
                    tampung += 'o'
                } else if (i === p - 1) {
                    tampung += 'o'
                } else if (h === t - 1) {
                    tampung += 'o'
                } else {
                    tampung += ' '
                }
            }
            console.log(tampung)
        }
    } else {
        console.log('panjang harus lebih besar daripada tinggi')
    }
}

generateBar(4, 3) //
console.log('\n')
/*
    oooo
    o  o
    oooo
*/

generateBar(10, 4) // 
console.log('\n')
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4, 5) // panjang harus lebih besar daripada tinggi
// console.log('\n')