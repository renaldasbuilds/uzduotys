// 1 
// Susikurkite knygų objektų masyvą. 
// Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. 
// Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.

console.log('\n\n\n');
console.log('=========== 1 ===========');
const books = [
    { 
        title: 'Book1',
        pages:  300 ,
        lang:   'LT',
        copies: 5000,        
    },
    { 
        title: 'Book2',
        pages:  500 ,
        lang:   'LT',
        copies: 15000,        
    },
    { 
        title: 'Book3',
        pages:  600 ,
        lang:   'LT',
        copies: 50000,        
    },
];
console.log(books[0]);
console.log(books[1].title);

// 2
// Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. 
// Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.

console.log('\n\n\n');
console.log('=========== 2 ===========');
const items = [
    { 
        title: 'item1',
        price:  300,
        color: 'black'     
    },
    { 
        title: 'item2',
        price:  500,
        color: 'yellow'    
    },
    { 
        title: 'item3',
        price:  600,
        color: 'red'       
    },
];
for (let i of items) {
    console.log(i.title,'-', i.price ,'EUR \n'
        , i.color);
}

//  3
//  Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
//  Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
console.log('\n\n\n');
console.log('=========== 3 ===========');
const vehicles = [
    { 
        title: 'Audi',
        year: 2010 
    },
    { 
        title: 'Bmw',
        year: 2005   
    },
    { 
        title: 'Opel',
        year: 2012       
    },
];
// for (const i of vehicles) { 
//     console.log('Pavadinimas:', i.title);
// }

vehicles.forEach(veh => {
    console.log('Amzius: ', 2025 - veh.year);
})