// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    //your code here
    let arr = []
    // console.log(param[Math.floor(param.length / 2) - 1]);

    // console.log(param[param.length / 2], '<==');

    for (let i = 0; i < ((param.length - 1) / 2); i++) {
        arr.push([param[i], param[param.length - 1 - i]])
    }

    if (param.length % 2 !== 0) {
        arr.push([param[Math.floor(param.length / 2)], 'Instruktur'])
        return arr
    } else {

        return arr

    }
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

// var pasangan = []
// var pasanganGanjil = param[Math.floor(param.length / 2)] + '\',' + 'Instruktur'
// for (var i = 0; i < Math.floor(param.length / 2); i++) {
//     pasangan[i] = []
//     pasangan[i].push(param[i], param[param.length - 1 - i])

// }
// if (param.length % 2 !== 0) {
//     // pasangan[i].push('Instruktur')
//     pasangan.push([pasanganGanjil])
//     return pasangan
//     //     pasangan[pasangan.length - 1].length = 2
// } else
//     return pasangan