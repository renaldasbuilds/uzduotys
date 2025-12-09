// 1. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
console.log('============1=============');
let programs =  [ 'Matematika' , 'Istorija', 'Fizika' ];

for(let i = 0; i < programs.length; i++) {
    console.log(programs[i]);
}



// 2. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
console.log('============2=============');
let countries = [ 'Lietuva' , 'Latvija' , 'Estija' ];
for(let i = 0; i < countries.length; i++) { 
    console.log('Šalis', countries[i]);
}

// 3.
// Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. 
// Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
console.log('============3=============');

let projects = [ 'Projektas 1' , 'Projektas 2' , 'Projektas 3' ];
for(let i = 0; i < countries.length; i++) { 
    console.log((i + 1) + '-as' , projects[i]);
}


// Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
console.log('============4=============');
let numbers = [ 1, 2 , 3 , 13, 10, 20, 30, 40 , 50 , 4 ];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 5) {
        console.log(numbers[i]);
    }
}


// Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
console.log('============5=============');
let array_map = [];
let i   = 0;
let sum = 0;
while(i < 10) {
    i++;
    let rand = Math.floor(Math.random() * 100);
    array_map.push(rand);
}
//console.log(array_map);
for(let i = 0 ;i < array_map.length; i++) {
    if(array_map[i] % 4 == 0) { 
        sum += array_map[i];
    }
}
console.log('Suma kurie dalinasi is 4', sum);


// Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
console.log('\n\n\n');
console.log('============6============');
let score_array = [];
let x    = 0;
let avg  = 0;
let summ = 0;
while (x < 15) {
    x++;
    let rnd = Math.floor(Math.random() * 50);
    score_array.push(rnd);
}
for (let i = 0; i < score_array.length; i++) { 
    summ += score_array[i]; // suma
    avg = summ / score_array.length // vidurkis
}
console.log('Skaiciai:', score_array);
console.log(`Suma: ${summ}`);
console.log(`Vidurkis: ${avg}`);



// Susikurkite skaičių masyvą ir užpildykite jį duomenimis. 
// Išveskite visus skaičius atskirose eilutėse. 
// Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.

console.log('\n\n\n');
console.log('============8=============');
let array_numbers = [ 12 , 24 , 44 , 68 , 67 , 10 , 100 ];
let sq     = 0;
let normal = 0;

for(let i = 0; i < array_numbers.length; i++) {
    if(array_numbers[i] % 2 == 0) {
        sq = array_numbers[i] * array_numbers[i];
        console.log(sq);
    } else {
        normal = array_numbers[i];
        console.log(`Nelyginis ${normal}`);
    }
}


// Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). 
// Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. 
// Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

console.log('\n\n\n');
console.log('============9=============');
let mark_array = [];
let n    = 0;
let need = 0;
while(n < 10) {
    n++;
    let rnd = Math.floor(Math.random() * 10);
    mark_array.push(rnd);
}

for (let i = 0; i < mark_array.length; i++) { 
    if (mark_array[i] >= 5) { //teigiami
        console.log(`Teigiamas ${mark_array[i]}`);
    } else { // neigiami
        need = (5 - mark_array[i]);
        console.log(`Neigiamas ${mark_array[i]}... pritruko ${need}`);
    }
}


//10
// Susikurkite žodžių masyvą ir užpildykite duomenimis. 
// Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. 
// Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).

console.log('\n\n\n');
console.log('============10=============');


let letter_array = [ 'Audi' , 'Bmw' , 'Opel' , 'Citroen' , 'Mercedes-Benz' ];
let letter_sum = 0;
for (let i = 0; i < letter_array.length; i++) {
    console.log(letter_array[i] , 'sudaryta iš', letter_array[i].length ,'raidžių');
    letter_sum += letter_array[i].length;
    console.log('Visų raidžių kiekis:', letter_sum);
}   

// 11
// Susikurkite skaičių masyvą ir užpildykite duomenimis. 
// Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. 
// Išveskite pradinius duomenis ir gautus atsakymus
console.log('\n\n\n');
console.log('============11=============');

let numbers_arr = [ 14, 81 , 10 , 103 , 45 , 24 ];
let aSum = 0;
let bAvg = 0;
let m = 0;
let dividers = [];
let others   = [];
for(let i = 0; i < numbers_arr.length; i++) {
    if(numbers_arr[i] % 3 === 0) {
        m++;
        aSum += numbers_arr[i]; // suma
        bAvg = aSum / m;
        dividers.push(numbers_arr[i]);
    } else {
        others.push(numbers_arr[i]);
    }   
}
console.log('Kiti skaiciai:', others);
console.log('Skaiciai:', dividers);
console.log('Suma skaiciu kurie dalinasi is 3: ', aSum);
console.log('Skaiciu vidurkis: ',bAvg);