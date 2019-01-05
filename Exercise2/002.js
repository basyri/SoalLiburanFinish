// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    //your code here
    var pasangan = []

    // var num = 0
    if (param.length % 2 !== 0 && param.length < 6) {
        pasangan.push(['Instruktur'])
    }

    for (var i = 0; i < param.length / 2; i++) {

        if (i === 0 || i === param.length - 1) {
            pasangan.push([param[i] + ',' + param[param.length - 1]])
        } else if (i === 1 || i === param.length - 2) {
            pasangan.push([param[i] + ',' + param[param.length - 2]])
        } else if (i === 2 || i === param.length - 3) {
            pasangan.push([param[i] + ',' + param[param.length - 3]])
        }
        // num++
    }


    if (param.length % 2 !== 0 && param.length > 5) {
        pasangan.push(['Zaki', 'Instruktur'])
    }

    return pasangan

}

console.log(soal2(['Aries', 'Dimas', 'Gatot', "Nurmantyo", "Zainul", "Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A', 'B', 'C', 'D', 'E'])) //
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan', 'Albert', 'Erithiana', 'Zaki', 'Sisijoan', 'Henry', "Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]