function soal3(array) {
    let obj = {}
    array.sort()
    for (let i = 0; i < array.length; i++) {
        // key dari suatu object bersifat unik
        if (obj[array[i][0]] === undefined) {
            obj[array[i][0]] = []
        }
        obj[array[i][0]].push(array[i])

    }
    return obj
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