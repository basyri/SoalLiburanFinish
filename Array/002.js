/*
    ======================
    String to Multidimensi
    ======================

    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col

    [EXAMPLE]

    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akat 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]

 */

function stringToMultidimensi(str) {
    // your code here 
    var leng = str.length
    var tampung = []
    var num = 0
    if (leng % 2 === 0) {
        var rowNcol = Math.floor(Math.sqrt(leng))
        for (var i = 0; i < rowNcol; i++) {
            tampung[i] = []
            for (var j = 0; j < rowNcol; j++) {
                tampung[i].push(str[num])
                num++
            }

        }
        console.log(tampung)
    } else {
        console.log('char count invalid')
    }

}

stringToMultidimensi("0120194124213712")
/*
   [
       [0,1,2,0],
       [1,9,4,1],
       [2,4,2,1],
       [3,7,1,2]
   ]
*/
console.log('\n')
stringToMultidimensi("01201941242137127")
/*
   // char count invalid
*/