/*
   ====================
   Palindrome Recursive
   ====================

   [INSTRUCTION]
   buatlah sebuah program untuk mendeteksi sebuah kata palindrome atau bukan 
   dengan menggunakan methode recursive
   - jika sebuah kata atau kalimat palindrome maka outputnya adalah : true
   - jika sebuah kata atau kalimat bukan palindrome maka outputnya adalah : false 

   [EXAMPLE]
   palindromeRecursive("kasur ini rusak") 
   output: true

   palindromeRecursive("nababan")
   output: true
   
   palindromeRecursive("makan")
   output: false

bikin tugas pyramid pake recursive
   */

function palindromeRecursive(str) {
    // your code here 
    // ================
    // using substr
    // ================
    // if (str.length <= 1) {
    //     return true
    // } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
    //     return false
    // } else {
    //     return palindromeRecursive(str.substr(1, str.length - 2))
    // }
    // ================
    // using slice
    // ================
    if (str.length === 1) {
        return true
    } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false
    } else {
        return palindromeRecursive(str.slice(1, str.length - 1))
    }

}

console.log(palindromeRecursive("kasur ini rusak")) // true 

console.log(palindromeRecursive("nababan")) // true

console.log(palindromeRecursive("makan")) // false