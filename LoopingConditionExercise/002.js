/*
    ===========
    Bar X dan O
    ===========

    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X

    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 

    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 

    [EXAMPLE]

    generateBarXO(4,3)
    output: 
    xoox
    ooxo
    oxoo
    xoox

    generateBarXO(6,4)
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo

*/

function generateBarXO(p, t) {
    // your code here 
    var num = 3
    for (var h = 0; h < t; h++) {
        var tampung = ''
        for (var i = 0; i < p; i++) {
            if (num % 3 === 0) {
                tampung += 'x'
            } else {
                tampung += 'o'
            }
            num++
        }
        console.log(tampung)
    }
}

generateBarXO(4, 3)
console.log('\n')
/* 
xoox
ooxo
oxoo
xoox
*/

generateBarXO(6, 4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/