// 1
// Susikurkite objektą informacijai apie knygyną saugoti. 
// Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. 
// Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).
console.log('\n\n\n');
console.log('=========== 1 ===========');
const bookstore = {
    name:    'Baltos Lankos',
    address: 'Vilniaus g. 10, Vilnius',
    area:    120,          
    books:   3500,
    working_hours: "9-17",
    isOpen: true
};

for (let i in bookstore) {
    //console.log(i , '-' ,bookstore[i]);
    if(typeof bookstore[i] != 'string') { 
        console.log(bookstore[i]);
    }
}
 // 2
 
//  Susikurkite du objektus, dviejų studentų informacijai saugoti. 
//  Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. 
//  Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. 
//  Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.
console.log('\n\n\n');
console.log('=========== 2 ===========');
let student1 = {
    firstname: 'Jonas',
    lastname:  'Jonaitis',
    studyProgram: 'Matematika',
    marks: [ 8, 10 , 4, 6, 3 ],
    avg_mark: 0,
};

let student2 = {
    firstname: 'Agne',
    lastname:  'Petrauskaite',
    studyProgram: 'Informatika',
    marks: [ 7, 8, 4, 9 , 10 ],
    avg_mark: 0,
};

let tot1 = 0;
let tot2 = 0;
for (let mark of student1.marks) { // 1
    tot1 += mark;
}
for (let mark of student2.marks) { // 2
    tot2 += mark;
} 

student1.avg_mark = tot1 / student1.marks.length;  
student2.avg_mark = tot2 / student2.marks.length;

console.log(student1, 'Vidurkis:', student1.avg_mark);
console.log(student2, 'Vidurkis:', student2.avg_mark);

if(student1.avg_mark > student2.avg_mark) { 
    console.log(student1.firstname, student1.lastname);
} else if(student1.avg_mark < student2.avg_mark) {
    console.log(student2.firstname, student2.lastname);
} else {
    console.log('Pazymiu vidurkis toks pat')
}
