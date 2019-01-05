function tampilSpiral(objek) {
    for (var i = 0; i < objek.length; i++) {
        console.log(objek[i].join(' '));
    }
}

function tampungSpiral(size) {
    let i = size;
    const tampung = [];
    while (i--) tampung.push(new Array(size));
    return tampung;
}



function spiralNumber(param) {
    // your code here
    const spiral = tampungSpiral(param);
    let currentNumber = 1;
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;

    while (currentNumber <= param * param) {
        spiral[i][j] = currentNumber++;
        if (j + dj === param || i + di === param || j + dj === -1 || spiral[i + di][j + dj]) {
            const tempDi = di;
            di = dj;
            dj = -tempDi;
        }
        i += di;
        j += dj;

    }

    return spiral;

}

tampilSpiral(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/
console.log('\n')
tampilSpiral(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/