function soal3(param) {
    // your code here
    var finalResult = {}
    var under20 = []
    var over20 = []

    for (var i = 0; i < param.length; i++) {


        for (var j = 0; j < 2; j++) {
            if (param[i][j] < 20) {
                under20.push(param[i][0])
            } else if (param[i][j] > 20) {
                over20.push(param[i][0])
            }

        }


    }
    finalResult = new Object({
        under20,
        over20
    })

    return finalResult
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