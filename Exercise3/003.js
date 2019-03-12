function soal3(param) {
    let obj = {}
    let under = []
    let over = []
    for (let i = 0; i < param.length; i++) {
        if (param[i][1] < 20) {
            under.push(param[i][0])
        } else {
            over.push(param[i][0])

        }

        obj.under20 = under
        obj.over20 = over
    }
    return obj
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