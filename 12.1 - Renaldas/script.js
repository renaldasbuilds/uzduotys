// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10. 
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('\n\n\n');

// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
for (let i = 0; i <= 15; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...

console.log('\n\n\n');

for (let i = 0; i < 21; i += 3)  {
        console.log(`[${i}]`);
}


// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
console.log('\n\n\n');
for (let i = 1; i < 20; i++) {
    if(i % 4 == 0) {
        console.log(i);
    }
}

// 5. 
// Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. 
// Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). 
// Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.
console.log('\n\n\n');
let start = 0;
let end   = 10;

console.log('===== 5 ===== ');
if(end > start) {
    for(let i = start; i < end; i++){
        console.log(i , i*i);
    }
} else {
    console.log('Klaida');
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. 
// Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). 
// Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.

console.log('\n\n\n');

let vStart = 0;
let vEnd   = 10;

console.log('===== 6 ===== ');
if(vStart < vEnd) {
    for(let i = vStart; i < vEnd; i++) {
        if(i % 8 == 0 || i % 2 != 0 ) { 
            console.log(i);
        }
    }
} else {
    console.log('Klaida');
}
// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.

console.log('\n\n\n');
console.log('===== 7 =====');

let aValue = 10;
let bValue = 3;
let answer = 0;

for(let i = 0; i < aValue; i++) {
    answer += bValue;
}
console.log(answer);