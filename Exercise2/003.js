function soal3(param) {
    // your code here
    param.sort()
    var sorting = []
    for (var i = 0; i < param.length; i++) {
        sorting[i] = []
        for (var j = 0; j <= 1; j++) {
            if (param[i][j] === 'A') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'B') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'C') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'K') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'L') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'M') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'S') {
                sorting[i].push(param[i][j] + ':' + param[i])
            } else if (param[i][j] === 'Z') {
                sorting[i].push(param[i][j] + ':' + param[i])
            }
        }
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