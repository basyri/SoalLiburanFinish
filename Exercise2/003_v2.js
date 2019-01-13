function groupAnimals(animals) {
    // your code here

    var zoo = [];
    // variabel untuk index array zoo
    var index = 0;
    // fungsi sorting
    animals.sort();

    // perulangan sebanyak jumlah hewan di array animals
    for (var i = 0; i < animals.length; i++) {
        // jika array zoo masih kosong, maka hewan pertama dari array animals akan di-push 
        if (zoo.length === 0) {
            // push data hewan ke array zoo
            // [['ayam']]
            zoo.push([animals[i]]);
            // membandingkan karakter pertama zoo[index][0][0] dengan karakter pertama pada array animals   
        } else if (zoo[index][0][0] === animals[i][0]) {
            // jika karakter pertama dari nama hewan sama, maka akan dipush ke index array yang sama
            // [['ayam', 'anoa']]
            zoo[index].push(animals[i]);
            // jika 2 kondisi sebelumnya tidak terpenuhi (karakter pertama dengan nama hewan sebelumnya tidak sama  
        } else {
            // push hewan dari animals ke index array baru di dalam array zoo
            // [['ayam', 'anoa'], ['cacing']]
            zoo.push([animals[i]]);
            // index dari array zoo ditambah 1
            index++;
        }
    }
    // return output array zoo
    return zoo;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]