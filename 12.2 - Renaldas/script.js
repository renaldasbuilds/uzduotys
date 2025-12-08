// 1. Raskite visų skaičių nuo 1 iki 100 sumą.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 2. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
console.log('\n\n\n')
let value = 0;
for(let i = 20; i <= 50; i++) {
    if(i % 2 == 0) {
        value += i;
    }    
}
console.log(value);
// 3. Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.

console.log('\n\n\n');

let a = 0; 

for(let i = 30; i < 60; i++) { 
    if(i % 2 != 0) { 
        a += i;
    }
}
console.log(a);

// 4
//  Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. Pavyzdys:
// 	Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// 	Šių skaičių suma yra 23.
//  Turite gauti 233168 atsakymą.

console.log('\n\n\n');
let c = 0;

for (let i = 0; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        c += i;
    }
}
console.log(c);


// 5
// The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”."

// console.log('\n\n\n');

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// 6
// (sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21…
// Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai pasiekti.
// Pirmi du kintamieji saugos paskutinius du skaičius.
// Trečiasis bus šių pirmų dviejų skaičių suma.
// Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
// Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet pirmasis skaičius yra lygus antram, o antrasis lygus trečiam, išvesti į ekraną trečią skaičių.


let first  = 2;
let second = 2;
let third  = 0;

console.log(first);
console.log(second);

for (let i = 2; i < 30; i++){  
    third = first + second;
    console.log(third);
    first = second;
    second = third;
}
