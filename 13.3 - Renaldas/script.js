// Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. 
// Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
console.log('\n\n\n\n');
console.log('==================1==================');
let cars = [ 'Audi' , 'Bmw' , 'Opel' ];
for (let i in cars) { 
    console.log(i, cars[i]);
}

// Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. 
// Išveskite kiek pirkinių yra šiame sąraše. 
// Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
console.log('\n\n\n\n');
console.log('==================2==================');
let cart = [ 'item1' , 'item2' , 'item3' ];
let total = 0;
for (let i in cart) { 
    total++;
    console.log('- ', cart[i]);    
}
console.log('Is viso krepseli: ', total);


// Susikurkite masyvą studento pažymiams saugoti. 
// Užpildykite šį masyvą duomenimis. 
// Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
console.log('\n\n\n\n');
console.log('==================3==================');
let marks = [ 4 , 7 , 6 , 8 , 3 , 4 , 10 ];
let mark_total = 0;
let mark_sum = 0;
for (let i in marks) { 
    mark_total++; // viso pazymiu
    mark_sum += marks[i];
    console.log(marks[i]);
}
let avg = mark_sum / mark_total;

console.log('Sum: ', mark_sum);
console.log('Vidurkis: ', mark_sum / mark_total);

//  7.
//  Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. 
//  Tuomet išveskite visas sukauptas klaidas administratoriui, taip,
//  kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", 
//  arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

console.log('\n\n\n\n');
console.log('==================7==================');

const errors = [ 'ui87' , 'sys12' ];

for (let i of errors) {
    if(i === 'ui87') {
        console.log('Grafinės sąsajos klaida navigacijoje');
    } else if(i === 'sys12') { 
        console.log('Trūksta operatyviosios atminties sistemoje');
    } else {
        console.log('Klaida neegzistuoja');
    }
}

// 8.
// Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). 
// Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. 
// Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. 
// Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.

console.log('\n\n\n\n');
console.log('==================8==================');

let stock = [ 10 , 20 , 30 , 40 ];
let bought_per_day = 5;

for (let i in stock) { 
    let current = stock[i] / bought_per_day;
    console.log(`Dabartinis likutis: ${stock[i]} / Uzteks: ${current} dienu.`);
}


// Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. 
// Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

console.log('\n\n\n\n');
console.log('==================10==================');

let student_st = [ 4, 10, 7, 6 ,5 , 2, 10, 10 ];
let student_nd = [ 4, 2, 6, 6 ,5 , 2, 4, 7 ];

let sum1 = 0; 
let avg1 = 0;

let sum2 = 0; 
let avg2 = 0;

for (let i in student_st) {
    sum1 += student_st[i];
    avg1 = sum1 / student_st.length;
}
for (let i in student_nd) { 
    sum2 += student_nd[i];
    avg2 = sum2 / student_nd.length;
}
if(avg1 > avg2) {
    console.log('1 studento vidurkis didesnis');
} else if(avg1 < avg2) {
    console.log('2 studento vidurkis didesnis');
} else {
    console.log('Abieju studentu vidurkis lygus.');
}

console.log('1 studento pazymiai: ',student_st);
console.log('1 studento vidurkis:', avg1);
console.log('---------------------------------------');
console.log('2 studento pazymiai: ',student_nd);
console.log('2 studento vidurkis:', avg2);


// 11.
// Susikurkite masyvą norimiems žodžiams saugoti. 
// Užpildykite šį masyvą duomenimis. 
// Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.


console.log('\n\n\n\n');
console.log('==================11==================');

let words = [ 'Renaldas' , 'Mantas' , 'Laurynas' , 'Jonas' , 'Ema' ];
let short = [];

for (let i in words) {
    console.log(words[i]);
    if(words[i].length <= 5) {
        short.push(words[i]);
    }
}
console.log('-------------------');
console.log('Vardai, kurie trumpesni arba lygu negu 5 raides:');
for(let i in short) { 
    console.log(short[i]);
}