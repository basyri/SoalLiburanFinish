function soal2(param) {
    // =================
    //    versi -array
    // =================
    // var label = [
    //     ["firtName:"],
    //     ["lastName:"],
    //     ["hobbies:"],
    //     ["profession:"]
    // ]
    // var tampung = []
    // for (var i = 0; i < param.length; i++) {
    //     tampung[i] = []
    //     for (var j = 0; j < param.length + 2; j++) {
    //         tampung[i].push(label[j] + param[i][j])
    //     }

    // }
    // console.log('\n')
    // return tampung
    // =================
    //   versi -object
    // =================
    var arr = []
    for (let i = 0; i < param.length; i++) {
        arr.push({
            firtName: param[i][0],
            lastName: param[i][1],
            lastNhobbiesame: param[i][2],
            profession: param[i][3]
        })

    }
    console.log();

    return arr
}


console.log(soal2([
    ['Aries', 'Dimas', ' [coding, pubg, anime]', 'Web Developer'],
    ['Radit', 'Dika', ' [manga, gaming]', ' Web Developer']
]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/
console.log(soal2([
    ['Awtian', 'Akbar', ['coding', 'main kucing', 'anime'], 'Web Instructur'],
    ['Megalo', 'Maniak', ['metal music', 'maniac'], 'Maniac Expert']
]));
/* 
[ { firtName: 'Awtian',
    lastName: 'Akbar',
    lastNhobbiesame: [ 'coding', 'main kucing', 'anime' ],
    profession: 'Web Instructur' },
  { firtName: 'Megalo',
    lastName: 'Maniak',
    lastNhobbiesame: [ 'metal music', 'maniac' ],
    profession: 'Maniac Expert' } ]

*/