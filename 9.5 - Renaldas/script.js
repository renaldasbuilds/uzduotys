/*
Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.
Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.
Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
ar gautas vidurkis yra [8-10];
ar gautas vidurkis yra [5-8);
ar gautas vidurkis yra < 5.
Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
*/

// 1
let a = 37;
let b = 45;
let c = 87;

if(a > b && b > c) {
    console.log('1. a yra didziausias');
} else {
    console.log('1. a nera didziausias');
}


// 2

if(a < b && a < c) {
    console.log('1.2. a yra maziausias');
} else {
    console.log('1.2 a nera maziausias');
}

//3
/*
Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
ar gautas vidurkis yra [8-10];
ar gautas vidurkis yra [5-8);
ar gautas vidurkis yra < 5.
*/
console.log('\n\n\n')
let aExam = Math.floor(Math.random() * 10);
let bExam = Math.floor(Math.random() * 10);
let cExam = Math.floor(Math.random() * 10);

let avg = (aExam + bExam + cExam) / 3;

if(avg >= 8 && avg <= 10){
    console.log(`Gautas vidurkis yra tarp 8-10 - ${avg}`);
}
else if(avg >= 5 && avg <= 8) {
    console.log(`Gautas vidurkis yra tarp 5-8 - ${avg}`);
} else if(avg < 5 ) {
    console.log(`Gautas vidurkis yra mazesnis negu 5 - ${avg}`);
}


// 4
/*
Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100; */


console.log('\n\n\n')
let aValue = Math.floor(Math.random() * 10);
let bValue = Math.floor(Math.random() * 10);

if (aValue > bValue) {
    console.log('Pirmas skaicius didesnis uz antra. Skaicius');
    console.log(`Skaiciai: a - ${aValue} b - ${bValue}`);
} else if(bValue > aValue || bValue == 5) {
    console.log('Antras skaicius didesnis uz pirma arba lygus 5');
    console.log(`Skaiciai: a - ${aValue} b - ${bValue}`);
} else if(aValue > bValue || aValue == 20) {
    console.log('Pirmas skaicius didesnis uz antra arba lygus 20');
    console.log(`Skaiciai: a - ${aValue} b - ${bValue}`);
} else if (bValue > aValue ||  bValue < 100) {
    console.log('Antras skaicius didesnis uz pirmaji ir mazesnis uz 100');
    console.log(`Skaiciai: a - ${aValue} b - ${bValue}`);
}