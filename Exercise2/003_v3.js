function soal3(param) {
    // your code here
    param.sort()
    var sorting = []
    var zoo = []
    for (var i = 0; i < param.length; i++) {
        sorting[i] = []
        for (var j = 0; j <= 1; j++) {
            if (zoo[j][0][0] === param[i][0]) {
                zoo[j].push(param[i])

            }
        }
        sorting.push(zoo[j])
    }
    return sorting //[0][1]
}

console.log(soal3(['Ayam', 'Kucing', 'Bebek', 'Sapi', 'Babi', 'Curut', 'Cacing', 'Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing', 'Kuda', 'Anoa', 'Zebra', 'Lipan', 'Kudanil', 'Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/