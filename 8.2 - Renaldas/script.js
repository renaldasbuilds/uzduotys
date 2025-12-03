// 1

let name     = 'Renaldas';
let surname  = 'Laurinavicius';
let age      =  28;
const height =  1.80;
let weight   =  80.0;
let hSchool  =  false;
let code     =  0;
let course   =  false;
let credits  =  0;

console.log('----------- Užduotis Nr. 1 ------------');
console.log('Vardas:',name);
console.log('Pavarde: ',surname);
console.log('Amzius: ',age);
console.log('Ugis: ',height);
console.log('Svoris: ',weight);
console.log('Aukstoji mokykla: ', hSchool);
console.log('Kursas: ', course);
console.log('Kreditai ', credits);



// 2
let city       = 'Utena';
let country    = 'Lietuva';
let region     = 'Aukstaitija';
let created_at =  1269;
let mayor      = 'M.Kaukenas';
let area       =  1229;
let citizens   =  30000;
console.log('\n\n\n')


console.log('----------- Užduotis Nr. 2 ------------');
console.log('Pavadinimas: ', city);
console.log('Valstybė: ', country);
console.log('Apskritis: ', region);
console.log('Ikurimo data: ', created_at ,'m.');
console.log('Meras: ', mayor);
console.log('Plotas kv.km: ', area ,'km2');
console.log('Gyventoju skaicius: ', citizens);


//3
console.log('\n\n\n');

let tName = 'Renaldas';
console.log('Mano vardas yra ', tName);


// 4 Susikurkite kintamuosius studento akademinei grupei ir vidurkiui saugoti. Išveskite į konsolę, atskirose eilutėse pagalbinius tekstus, po kurių sektų dvitaškis ir atitinkamas kintamasis. Pavyzdžiui:
console.log('\n\n\n')
let group   = 'Studentai';
let aAvg    = 15;
let bAvg    = 26;
let cAvg    = 14;
let average = (aAvg + bAvg + cAvg) / 3; 

console.log('Akademine grupe:', group);
console.log('Studentu vidurkis: ', average);

// 5 Susikurkite kintamąjį, kuris saugotų bet kokį žodį. Išveskite šį žodį naudojant vieną console.log(). Žodis turi būti išvestas 5 kartus toje pačioje eilutėje, neatskiriant jokiu tarpu.
console.log('\n\n\n')

let word = 'hello world';
console.log(`${word} ${word} ${word} ${word} ${word}`);

//6
// Susikurkite šiuos kintamuosius, saugančius informaciją apie gyvūną: pavadinimas, amžius, kailio spalva, svoris. Išveskite šiuos duomenis gražiai suformatuotus vienoje eilutėje, sakinio forma. Pavyzdžiui:
// Gyvūnas - šuo (2 m.) turi rudą kailio spalvą ir sveria 1.4 kg.
console.log('\n\n\n');

let dogname   = 'Dogas';
let dogage    =  5;
let dogfur    = 'juoda';
let dogweight =  3;

console.log(`Gyvunas ${dogname} ${dogage}m. turi ${dogfur} kaili ir sveria ${dogweight}kg.`);



//7
//Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje be tarpų tarp šių skaičių. Pavyzdžiui: skaičius - 25, išvedimas - 2525252525
console.log('\n\n\n');

let number = '25252525252525';
console.log(number);

//8
//Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje su tarpais tarp šių skaičių. Pavyzdžiui:
//skaičius - 25, rezultatas - 25 25 25 25 25
console.log('\n\n\n');
let nb = 25;
console.log(`${nb} ${nb} ${nb} ${nb} ${nb}`);



//9
/*
Susikurkite kintamąjį, kuriame saugosite norimą simbolį (pavyzdžiui: *). Išveskite tuščiavidurį, norimo dydžio, kvadratą iš turimo simbolio.
(papildomai) Pabandykite tai atlikti naudojant tik vieną console.log(). Nepamirškite, kad norint pereiti į naują eilutę, tarp dvigubų kabučių (teksto) galima naudoti užrašą \n.
*/
console.log('\n\n\n')
let s = '*';
console.log(`${s}${s}${s}${s}${s}${s}${s}${s}\n` +
            `${s}      ${s}\n` +
            `${s}      ${s}\n` +
            `${s}      ${s}\n` +
            `${s}      ${s}\n` +
            `${s}${s}${s}${s}${s}${s}${s}${s}`);