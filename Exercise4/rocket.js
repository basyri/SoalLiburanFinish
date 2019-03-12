function rocket(param) {
    // your code here 
    if (param % 2 !== 0) {
        for (var i = 1; i <= param; i++) {
            var bintang = []
            for (var j = 1; j <= param; j++) {
                if (j < Math.floor(((param + 1) / 2)) + 1 && j > Math.floor(((param + 1) / 2)) - 1 && i < Math.floor(((param + 1) / 2)) + 1 && i > Math.floor(((param + 1) / 2)) - 1) {
                    bintang.push('*')
                } else {
                    bintang.push('')
                }
            }
            console.log(bintang)

        }
    } else {
        for (var i = 1; i <= param; i++) {
            var bintang = []
            for (var j = 1; j <= param; j++) {
                if (j < Math.floor(((param + 2) / 2)) + 1 && j > Math.floor(((param + 2) / 2)) - 2 && i < Math.floor(((param + 2) / 2)) + 1 && i >= Math.floor(((param + 2) / 2)) - 1) {
                    bintang.push('*')
                } else {
                    bintang.push('')
                }
            }
            console.log(bintang)
        }
    }
}
rocket(5)
console.log('\n')

/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

rocket(3)
console.log('\n')

/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

rocket(4)
console.log('\n')

/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

rocket(2)
console.log('\n')

/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

rocket(1)
/*
    [
        ['*']
    ]
*/