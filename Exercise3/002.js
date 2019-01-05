/*
    wajib pseudocode. 

    Jawaban pseudocode disini 
    
*/

function soal2(param) {
    var a = 'abcdefghijklmnopqrstuvwxyz'
    var currentIndex = 0
    var tampung = []
    if (param !== 0) {
        for (var i = 0; i < param; i++) {
            tampung[i] = []
            for (var j = 0; j < param; j++) {
                if (currentIndex < a.length) {
                    if ((i % 2) === 0) {
                        tampung[i].push(a[currentIndex])
                    } else {
                        tampung[i].push(a[currentIndex])
                    }
                } else {
                    currentIndex = 0
                    tampung[i].push(a[currentIndex])
                }
                currentIndex++
            }
        }
        return tampung
    } else {
        return ' invalid input'
    }
}
console.log(soal2(8))
console.log('\n')
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
console.log('\n')
// /*
//     [
//         ['a','b'],
//         ['c','d']
//     ]
// */

console.log(soal2(0)) // invalid input