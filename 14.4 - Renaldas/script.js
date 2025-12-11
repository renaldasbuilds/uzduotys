// 1
// Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. 
// Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). 
// Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).
console.log('\n\n\n');
console.log('=========== 1 ===========');
const companies = [
    {
        title: 'Imone 1',
        company_workers: 200,
        company_age: 17,
        profit: 370000
    },
    {
        title: 'Imone 2',
        company_workers: 450,
        company_age: 28,
        profit: 6400000
    },
    {
        title: 'Imone 3',
        company_workers: 600,
        company_age: 40,
        profit: 1500000
    }
];

let total_workers = 0;
let total_profit  = 0; 
for (const company of companies) { 
    console.log(company.title ,'turi', company.company_workers ,'darbuotoju. Jos amzius yra', company.company_age ,'o praeitu metu pelnas yra', company.profit);
    total_workers += company.company_workers;
    total_profit += company.company_workers;
}
console.log('Is viso darbuotoju per visas imones:', total_workers);
console.log('Bendras imoniu pelnas:', total_profit);

// 2
// Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. 
// Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.
console.log('\n\n\n');
console.log('=========== 2 ===========');
const hospitals = [
    { 
        title: 'Utenos ligonine',
        address: 'Aukstakalnio g. 3, Utena',
        visitors: 950000,
        average_workers: 460,    
    },
    { 
        title: 'Ukmerges ligonine',
        address: 'Vytauto g. 105, Ukmergė, 20184 Ukmergės r. sav.',
        visitors: 750000,
        average_workers: 750,    
    },
    { 
        title: 'Vilniaus ligonine',
        address: ' Santariškių g. 2, Vilnius, 08406 Vilniaus m. sav.',
        visitors: 1500000,
        average_workers: 2500,    
    }
];

let avg_visitors = 0;
let avg_workers  = 0;
for (const hospital of hospitals) { 
    console.log('====', hospital.title, '====');
    console.log('Adresas:\n',hospital.address);
    console.log('============================');
    avg_visitors += hospital.visitors;
    avg_workers  += hospital.average_workers;
}

console.log('Vid lankytoju:',  Math.floor(avg_visitors / hospitals.length));
console.log('Vid darbuotoju:', Math.floor(avg_workers / hospitals.length));