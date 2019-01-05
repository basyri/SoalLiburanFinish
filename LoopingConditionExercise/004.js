/*
    ================
    simple Trapesium
    ================

    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)

    Program ini memiliki 2 release. 
    yaitu : 

    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo

    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo

*/

function trapesiumRelease0(t) {
    // your code here
    for (var h = t; h < 2 * t; h++) {
        var tampung = ''
        for (var i = 0; i < h; i++) {

            tampung += 'o'
        }
        console.log(tampung)
    }
    // console.log(tampung)
}
trapesiumRelease0(5)
/* 
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumReleaseFinal(t) {
    //your code here
    for (var h = t; h < 2 * t; h++) {
        var tampung = ''
        for (var i = 0; i < h; i++) {
            if (h === t) {
                tampung += 'o'
            } else if (i === 0) {
                tampung += 'o'
            } else if (i === h - 1) {
                tampung += 'o'
            } else if (h === 2 * t - 1) {
                tampung += 'o'
            } else {
                tampung += ' '
            }
        }
        console.log(tampung)
    }
}
console.log('\n')
trapesiumReleaseFinal(5)
// /*
// ooooo
// o    o
// o     o
// o      o
// ooooooooo
// */