function groupAnimals(animals) {
    let arr = []

    let obj = {}
    for (let i = 0; i < animals.length; i++) {
        if (obj[animals[i][0]] === undefined) {
            obj[animals[i][0]] = 0
        }
        obj[animals[i][0]] += 1

    }

    let obKeys = Object.keys(obj)
    obKeys.sort()
    for (let j = 0; j < obKeys.length; j++) {
        let cage = []
        for (let k = 0; k < animals.length; k++) {
            if (obKeys[j] === animals[k][0]) {
                cage.push(animals[k])
            }
        }
        arr.push(cage)
        // ifobKeys[j];

    }
    return arr
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]