/*
    ========================
    Multidimensi into String
    ========================

    [INSTRUKSI]
    diberikan sebuah array multidimensi, tugas kalian adalah mengconvert
    dari array multidimensi menjadi string 

    [RULE]
    - array harus multidimensi , bila tidak multidimensi output : "input is invalid"

    [EXAMPLE]
    multidimensiIntoString([
        [4,3,2,1,5],
        [4,2,7,9,3],
        [7,4,3,7,3],
        [4,6,3,6,8],
        [3,2,5,6,4]
    ])  
    output: 4321542793743734636832564

    multidimensiIntoString([1,2,3,4])
    output: input is invalid

*/

function multidimensiIntoString(arr) {
    // your code here
    var leng = arr.length
    var tampung = ''
    if (leng % 2 !== 0) {
        for (var i = 0; i < leng; i++) {
            tampung += arr[i]
        }
        console.log(String(tampung))
    } else {
        console.log('input is invalid')
    }
    // console.log(tampung)
    // return tampung

}

multidimensiIntoString([
    [4, 3, 2, 1, 5],
    [4, 2, 7, 9, 3],
    [7, 4, 3, 7, 3],
    [4, 6, 3, 6, 8],
    [3, 2, 5, 6, 4]
])
// 4321542793743734636832564

multidimensiIntoString([1, 2, 3, 4])
// input is invalid