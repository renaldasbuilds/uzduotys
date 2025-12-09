// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.

let values = [ 28 , 25 , 29 , 24 , 100];

console.log('Pirmas: ', values[0]);
console.log('Paskutinis: ', values[values.length - 1]);
console.log('Is viso nariu:', values.length);

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.

console.log('\n\n\n\n');
let array_map = [ 1 , 2 , 3 , 4 ];
console.log('Masyvo informacija:', array_map);
array_map[0] = 1;
array_map[1] = 3;
array_map[2] = 4;
console.log(array_map[0]);
console.log(array_map[1]);
console.log(array_map[2]);



// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.

console.log('\n\n\n\n');
let array = [];
array.push(6);
array.push(10);
array.push(15);
console.log(array);

// 5. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

console.log('\n\n\n\n');
let arr   = [];
let value = 20;
let i     = 0;
while(i < value) { 
   i++;
   let rand = Math.floor(Math.random() * 100);
   arr.push(rand);
}
console.log(arr);

// 6. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). 
// Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

let student1 = [ 7, 9, 5, 10 , 10 , 3 ];
let student2 = [ 5, 4, 3, 6, 10 , 10 ];

let score1 = 0;
let score2 = 0;

for(let i = 0; i < student1.length; i++) { 
    score1 += student1[i];
}
for(let i = 0; i < student2.length; i++) {
    score2 += student2[i];
}
console.log('Studento 1 vidurkis',  score1 / student1.length);
console.log('Studento 2 vidurkis:', score2 / student2.length);

if(score1 > score2 ) {
    console.log('Studento 1 vidurkis didesnis negu studento 2');
} else {
    console.log('Studento 2 vidurkis didesnis negu studento 1');
}