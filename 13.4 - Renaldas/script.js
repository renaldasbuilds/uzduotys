// 1
// Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. 
// Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). 
// Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).

console.log('\n\n\n')
console.log('============ 1 ===========');
let food = [ 'Ramenas' , 'Cepelinai' , 'Kotletai'];

food.unshift('Kebabas'); // prieki
food.push('Balandeliai'); // gale
food.splice(2, 0,'Sriuba');  // per viduri +-

food.pop();   // delete is galo
food.shift(); // delete is priekio
console.log(food);


// 2.
// Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).

console.log('\n\n\n')
console.log('============ 2 ===========');
let numbers = [ 10, 7, 6, 4, 14 ];
let a = numbers.includes(Math.floor(Math.random() * 10));
if(a) {
    console.log(a); // yra
} else {
    console.log('Nera');
}

// 3
// Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. 
// Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. 
// Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).
console.log('\n\n\n')
console.log('============ 3 ===========');
let letters = [ 'Namas' , 'Masina' , 'Lektuvas' ];
let variant = Math.floor(Math.random() * 3);
let symbol  = ''; 
switch (variant) { 
    case 0: { symbol = '-'; break; }
    case 1: { symbol = '+'; break; } 
    case 2: { symbol = '*'; break; }
    default: { symbol = ' '; }
}
let text = letters.join(symbol);
console.log(text);



// 7
// Susikurkite du masyvus. 
// Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. 
// Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.
console.log('\n\n\n')
console.log('============ 7 ===========');
let semester_st = [ 'Matematika' , 'Fizika' , 'Chemija' ];
let semester_nd = [ 'Muzika' , 'Daile', 'Tikyba' ];

console.log(
    'Pirmas semestras:', [...semester_st].join(','), 
    'Antras semestras:', [...semester_nd].join(','));



// 8
// Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. 
// Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. 
// Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, 
// turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.

console.log('\n\n\n')
console.log('============ 8 ===========');
let colors = [ 'Raudona' , 'Melyna' ,'Geltona' ];

let colors_copy = colors.slice(); // nauji duomenys is colors
colors = []; // isvalom sena colors masyva

console.log('Seni duomenys is colors', colors);
console.log('Nauji duomenys colors_copy', colors_copy);



// Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).
console.log('\n\n\n')
console.log('============ 10 ===========');

const map = [];
x = 0;
while(x < 15) { 
    x++;
    map.push(Math.floor(Math.random() * 10));
}
let   dub = false;

for( let i = 0; i < map.length; i++) { 
    let index = map.indexOf(map[i]);
    if(index != i){
        dub = true;
    }
}
console.log(map.join(' '));
if(dub) {
    console.log('Yra dublikatu');
} else {
    console.log('Nera dublikatu')
}
