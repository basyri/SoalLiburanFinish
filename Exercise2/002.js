// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    //your code here
    var pasangan = []

    for (var i = 0; i < param.length / 2; i++) {
        pasangan[i] = []

        if (i === Math.floor(param.length / 2) && param.length % 2 !== 0) {
            pasangan[i].push('Instruktur')
            pasangan[i].push(param[i], param[param.length - 1 - i])
            pasangan[pasangan.length - 1].length = 2

        } else {
            pasangan[i].push(param[i], param[param.length - 1 - i])
        }


    }

    return pasangan

}

console.log(soal2(['Aries', 'Dimas', 'Gatot', "Nurmantyo", "Zainul", "Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A', 'B', 'C', 'D', 'E'])) //
// // [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan', 'Albert', 'Erithiana', 'Zaki', 'Sisijoan', 'Henry', "Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]