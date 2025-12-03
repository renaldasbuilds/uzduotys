// 1
let value = Math.floor(Math.random() * 100);

if (value % 2 == 0 ) {
    console.log('skaicius',value,'yra lyginis');
} else if (value % 5 == 0) {
    console.log('skaicius',value,'dalinasi is 5');
} else if (value == 3) {
    console.log('skaicius',value,' lygus 3');
} else {
    console.log('Klaida');
}

// 2 Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

console.log('\n\n\n');
if (a == b) {
    console.log('2. A ir B lygus');
} else if (a == c) {
    console.log('2. A ir C skaiciai lygus');
} else if (c > a) {
    console.log('2. C didesnis uz A');
} else if (b == c * 2) {
    console.log('2. Antras skaicius lygus dvigubai skaiciaus reiksmei');
} else if (a % 3 == 0) {
    console.log('2. Skaicius dalinasi is 3')
} else {
    console.log('2. Klaida');
}
