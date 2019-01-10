function soal3(param) {
    // your code here
    var under20 = []
    var over20 = []

    for (var i = 0; i < param.length; i++) {
        under20[i] = []
        over20[i] = []
        for (var j = 0; j < 2; j++) {
            if (param[i][j] < 20) {
                under20[i].push(param[i])
            } else if (param[i][j] > 20) {
                over20[i].push(param[i])
            }
        }
    }


    return 'under20: [' + under20 + ']\n' + 'over20: [' + over20 + ']'
}

console.log(soal3([
    ["dimas", 17],
    ["akbar", 28],
    ["rifki", 30],
    ["dimitri", 18],
    ["saitama", 19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/