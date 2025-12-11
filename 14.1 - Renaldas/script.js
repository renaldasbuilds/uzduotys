//1
// Sukurkite objektą studento duomenims saugoti. 
// Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. 
// Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

console.log('\n\n\n');
console.log('=========== 1 ===========');
const student = {
    name:    'John',
    surname: 'Cena',
    age:         28,
    height:     180,
    study: 'Data analytics',
    credits: 5,
    marks: [ 8 , 9 , 10 , 6 , 7 , 5 ],

}
console.log(student);
console.log('Vardas:', student.name);
console.log('Studiju programa:', student.study);
console.log('Pazymiai:', student.marks.join(' '));

//2
// Sukurkite objektą informacijai apie filmą saugoti. 
// Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). 
// Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). 
// Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).
console.log('\n\n\n');
console.log('=========== 2 ===========');
const movie = {
    title: 'Shadow Orbit',
    director: 'Marcus Veldon',
    budget: 62000000,
    revenue: 187000000,
    release_date: 2023,
    actors: [
        'Lena Hart',
        'Damien Cole',
        'Hiro Tanaka',
        'Sofia Renquist' 
    ],
};
console.log(movie);
console.log('Pelnas:', (movie.revenue - movie.budget),'USD');
console.log('Aktoriau:', movie.actors.length);
console.log('Isleidimo data:', movie.release_date);


// 3

// Sukurkite du objektus dviejų knygų informacijai saugoti. 
// Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. 
// Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

console.log('\n\n\n');
console.log('=========== 3 ===========');
const silent_map = { 
    title: 'The Silent Map',
    author: 'Evelyn Romberg',
    price:   18.99,
    pages:   412,
    release: 2021,
    sections: [
        "Whispers in the Attic",
        "The Forgotten Coordinates",
        "Beneath the Iron Bridge",
        "A Letter Never Sent",
        "The Cartographer’s Secret",
        "Voices of the Northern Ridge",
        "The Silent Map",
        "Last Footsteps",
    ],
    store: true,
}

const ashes_aurora = { 
    title: 'Ashes of the Aurora',
    author: 'Victor Hale',
    price:   24.50,
    pages:   528,
    release: 2024,
    sections: [
        "Dawn Over Helix-9",
        "Fragments of the Burning Sky",
        "The Astral Pathway",
        "Collision Course",
        "Echoes of the Aurora",
        "Broken Orbit",
        "The Vigil Above",
        "Final Transmission"
    ],
    store: true,
}
console.log(silent_map);
console.log(ashes_aurora);
if(silent_map.pages > ashes_aurora.pages) { 
    console.log(silent_map.title, 'turi daugiau puslapiu uz', ashes_aurora.title);
} else if (silent_map.pages < ashes_aurora.pages) {
    console.log(silent_map.title, 'turi maziau puslapiu uz', ashes_aurora.title);
} else {
    console.log('Abi knygos turi vienoda puslapiu kieki');
}
if(silent_map.sections.length > ashes_aurora.sections.length) { 
    console.log(silent_map.title ,'turi daugiau skyriu negu', ashes_aurora.title);
}
if(silent_map.sections.length < ashes_aurora.sections.length) { 
    console.log(silent_map.title ,'turi maziau skyriu negu', ashes_aurora.title);
} else {
    console.log('Abi knygos turi tiek pat skyriu')
}
let cheaper   = 0;
let expensive = 0;
if(silent_map.price > ashes_aurora.price) {
    cheaper   = ashes_aurora.price;
    expensive = silent_map.price;
} else {
    cheaper   = silent_map.price;
    expensive = ashes_aurora.price;
}
if(cheaper * 2 >  expensive) { 
    console.log('Butu brangesne padvigubinus');
} else {
    console.log('Nebutu brangesne.');
}
// 4
// Sukurkite tris objektus prekių duomenims saugoti. 
// Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). 
// Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). 
// Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). 

// Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. 

// Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
console.log('\n\n\n');
console.log('=========== 3 ===========');
const chair = {
    title: 'IKEA kede',
    prime_cost: 2599,
    price: 4999,
    sku: 'IKEA-123456',
    qty:   10,
    dimensions: { // cm
        x: 46,
        y: 80,
        z: 30,
    }
}
const table = {
    title: 'IKEA stalas',
    prime_cost: 5599,
    price: 12999,
    sku: 'IKEA-654321',
    qty: 5,
    dimensions: {
        x: 120,
        y: 75,
        z: 70,
    }
}
const couch = { 
    title: 'IKEA sofa',
    prime_cost: 12000,
    price: 24999,
    sku: 'IKEA-987654',
    qty: 3,
    dimensions: { 
        x: 200,
        y: 85,
        z: 90,
    }
}
// helperiai (treniruote)
function priceEuro(value) { 
    return value / 100;
}
function getVolumeSize(item) {
    return item.dimensions.x * item.dimensions.y * item.dimensions.z;
}
// console.log(chair);
// console.log(table);
// console.log(couch);
console.log(`Preke ${chair.title} kainuoja ${priceEuro(chair.price)} , Preke ${table.title} kainuoja ${priceEuro(table.price)}EUR , Preke ${couch.title} kainuoja ${priceEuro(couch.price)}EUR`);


if(chair.price >= table.price && chair.price >= couch.price) { 
    console.log(chair.title, 'brangiausia preke.');
} else if(table.price >= chair.price && table.price >= couch.price) {
    console.log(table.title, 'brangiasia preke.');
} else if(couch.price >= chair.price && couch.price >= table.price) { 
    console.log(couch.title, 'brangiausia preke');
}
console.log(chair.title, 'dimensijos', chair.dimensions);
console.log(table.title, 'dimensijos', table.dimensions);
console.log(couch.title, 'dimensijos', couch.dimensions);

console.log(chair.title, 'pelningumas', priceEuro((chair.price - chair.prime_cost) * chair.qty), 'EUR');
console.log(table.title, 'pelningumas', priceEuro((table.price - table.prime_cost) * table.qty), 'EUR');
console.log(couch.title, 'pelningumas', priceEuro((couch.price - couch.prime_cost) * couch.qty), 'EUR');

// console.log(chair.title ,'tūris:' , chair.dimensions.x * chair.dimensions.y * chair.dimensions.z);
console.log('Tūris:', getVolumeSize(chair), 'cm3');
console.log('Tūris:', getVolumeSize(table), 'cm3');
console.log('Tūris:', getVolumeSize(couch), 'cm3');
// 5
// Sukurkite objektą automobilio duomenims saugoti. 
// Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). 
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. 
// Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). 
// Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).

let vehicle = {};
const date_now = new Date();
console.log(date_now.getFullYear());
vehicle.make    = 'Opel';
vehicle.model   = 'Insignia';
vehicle.year    = 2012;
vehicle.mileage = 350000;
vehicle.color   = 'Black',
vehicle.engine  = 2000;
vehicle.damage  = false;
console.log(vehicle);
console.log('Automobiliui yra:', 2025 - vehicle.year ,' metu');
console.log('Vidutiniskai per metus nuvaziuota', Math.floor(vehicle.mileage / (2025 - vehicle.year)),'km');





