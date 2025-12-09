// 1. Išveskite visus skaičius nuo 1 iki 20.

let value = 1;
while(value < 21) {
    console.log(value)
    value++;
}

// 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.

let a = 1;
while(a < 50) {
    a++;
    if(a % 2 == 0) {
        console.log(a ,' - lyginis');
    } else {
        console.log(a , ' - nelyginis');
    }
}

// 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.

let b = 25;
while(b < 50) {
    b++;
    if(b % 3 == 0) {
        console.log(`Skaicius ${b} dalinasi iš 3`);
    }
}

// 4. Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.

let i = 0;
while(true) { 
    i++;
    if(i % 3 == 0 && i % 5 == 0){
        console.log('Skaicius:', i);
        break;
    }
}
// 5. Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.

let f  = 0;
let cd = 0;
while(f < 100) { 
    f++;
    if(f % 2 == 0) {
        cd += f;
    }
}

console.log('Visa lyginiu suma: ',cd);

// 6 Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:

let skaicius = 1;

while (skaicius < 5) {
	console.log(skaicius , skaicius * skaicius);
	skaicius++;
}

// 7. Išveskite atsitiktinį kiekį atsitiktinių skaičių.

let qty = Math.floor(Math.random() * 10);
let nr  = 0;
while(nr < qty) { 
    nr++;
    let rand = Math.floor(Math.random(nr) * 100);
    console.log('Atsitikninis skaicius n kartu', rand);
}


// 8. Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.

let aQty = Math.floor(Math.random() * 100);
let aX   = 0;
let aSum = 0;
console.log('Kiekis:' , aQty);
while(aX < aQty) { 
    let rands = Math.floor(Math.random() * 15);
    aSum += rands;
    aX++; 
} 
console.log('Suma:', aSum);

// 9. Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. 
// Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių (gali būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1 dalies). 
// Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima inventoriuje. 
// Pardavinėkite tol kol nieko neliks.


console.log('\n\n\n\n');
// kiekiai
let item1 = 5;
let item2 = 20;
let item3 = 7;


while (item1 > 0 || item2 > 0 || item3 > 0) {
    let buy1 = Math.floor(Math.random() * 10);
    let buy2 = Math.floor(Math.random() * 10);
    let buy3 = Math.floor(Math.random() * 10);

    if(buy1 > item1) { 
        buy1 = item1; 
    } 
    if(buy2 > item2) { 
        buy2 = item2; 
    } 
    if(buy3 > item3) { 
        buy3 = item3; 
    } 
    
    item1 -= buy1;
    item2 -= buy2;
    item3 -= buy3;
    // console.log(`1: ${buy1} , 2: ${buy2} , 3: ${buy3}`);
    // console.log(`1: ${item1} , 2: ${item2} , 3 ${item3}`);
}
console.log('Isparduota');



