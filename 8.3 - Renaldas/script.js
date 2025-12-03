// 1 Išveskite į konsolę pasirinktą skaičių, jo kvadratą, jį pakeltą trečiu laipsniu.

let value = 5;
console.log('Kvadratas', value * value);
console.log('Trecias laipsnis', value * value * value);
console.log('\n\n\n');
// 2 Susikurkite tris kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir sandaugą.

let a = 10;
let b = 10;
let c = 10;
console.log('Suma:', + (a + b + c));
console.log('Sandauga:', + (a * b * c));
console.log(a);

//3 Susikurkite du kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir skirtumą. Išveskite sandaugą, gautą padauginus sumą ir skirtumą. Išveskite dalmenį, gautą padalinus sumą iš skirtumo.

console.log('\n\n\n');

let aValue = 28;
let bValue = 20;

console.log('Suma:', + (aValue + bValue));
console.log('Skirtumas:', + (aValue - bValue));
console.log('Sandauga:', + (aValue + bValue) * (aValue - bValue));
console.log('Dalmuo:', + (aValue + bValue) / (aValue - bValue));

//4Susikurkite keturis kintamuosius skaičiams saugoti. Išveskite šių skaičių vidurkį.

console.log('\n\n\n');

let aNumber = 30;
let bNumber = 14;
let cNumber = 39;
let dNumber = 77;
console.log('Vidurkis:', + (aNumber + bNumber + cNumber + dNumber) / 4); 

//5
// Išveskite į konsolę dviejų skaičių sumą, skirtumą, sandaugą ir dalmenį, kiekvieną kartą nurodant atliekamą veiksmą ir šių skaičių reikšmes. Pvz.:

console.log('\n\n\n');

let tNumber = 15;
let gNumber = 29;

console.log(`${tNumber} + ${gNumber} = `, (tNumber + gNumber));
console.log(`${tNumber} - ${gNumber} = `, (tNumber - gNumber));
console.log(`${tNumber} * ${gNumber} = `, (tNumber * gNumber));
console.log(`${gNumber} / ${tNumber} = `, (gNumber / tNumber));

// 6 Išveskite į konsolę šių veiksmų atsakymus (turite gauti 23, 5, 12, 3.5):
console.log('\n\n\n');
let vValue = 6;
let mValue = 4;
let nValue = -1;

console.log('Atsakymas:', ((vValue * mValue) + (-1)) );

let lValue = 35;
let uValue = 5;
let iValue = 7;

console.log('Atsakymas:', (lValue + uValue) % iValue);

let nm = 14;
let am = -4
let jm = 6;

console.log('Atsakymas:', nm + (am * jm ) / 12);

let fd  = 2;
let nd  = 15;
let sx  = 6;
let one = 1;
let mn  = 7;

console.log('Atsakymas:', fd + (nd / sx) * one - (mn % 2));

//2 + 15 / 6 * 1 - 7 % 2

console.log('\n\n\n');
let nmbr = 10;

console.log('', nmbr * 1);
console.log('', nmbr * 2);
console.log('', nmbr * 3);
console.log('', nmbr * 4);
console.log('', nmbr * 5);
console.log('', nmbr * 6);


// 8 (sunkesnė) Susikurkite dviženklį skaičių. Raskite jo skaitmenų sumą.
//Pavyzdžiui: 58 -> 5 + 8 = 13.
//Kad gauti pirmą skaitmenį galima dalinti iš 10 (ir panaudoti Math.floor(skaičius) arba Math.ceil(skaičius)).
//Kad gauti antrą skaitmenį galima dalinti su % iš 10.

console.log('\n\n\n');


let nr = 81;

let first = Math.floor(nr / 10);
let second = nr % 10;
console.log('Suma', first + second);





