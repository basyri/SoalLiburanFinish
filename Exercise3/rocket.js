function persegi(param1, param2) {
    // your code here 
    if (param1 === 0 || param2 === 0) {
        console.log('invalid value ')
    } else {
        for (var i = 0; i < param2; i++) {
            var awal = ''
            for (var j = 0; j < param1; j++) {
                if (i === 0) {
                    awal += '#'
                } else if (j === 0) {
                    awal += '#'
                } else if (j === param1 - 1) {
                    awal += '#'
                } else if (i === param2 - 1) {
                    awal += '#'
                } else {
                    awal += ' '
                }

            }
            console.log(awal)
        }

    }

}

persegi(5, 7)
console.log('\n')

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

persegi(6, 3)
console.log('\n')
/*
    ######
    #    #
    ######
*/


persegi(0, 7) // invalid value 
console.log('\n')
persegi(4, 0) // invalid value