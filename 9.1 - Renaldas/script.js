let a = 15;
let b = 27;
let c = 24;

// 1.1
if(a === b) {
    console.log('1.1 skaiciai lygus');
} else {
    console.log('1.1 skaiciai nelygus');
}

// 1.2
if(b === c) {
    console.log('1.2 skaiciai lygus');
} else {
    console.log('1.2 skaiciai nelygus');
}

// 1.3
if(a > b) {
    console.log('1.3 a didesnis uz b');
} else {
    console.log('1.3 b didesnis uz a');
}

// 1.4

if(b > c * 2) {
    console.log('1.4 b didesnis uz c');
} else {
    console.log('1.4 c didesnis uz b');
}

// 1.5 

if (a % 2 == 0) {
    console.log('1.5 pirmas skaicius yra lyginis')
} else {
    console.log('1.5 pirmas skaicius nelyginis')
}

// 1.6

if (b % 2 !== 0) {
    console.log('1.6 skaicius yra nelyginis');
} else {
    console.log('1.6 skaicius yra lyginis');
}

// 1.7

if (c > 0) {
    console.log('1.7 skaicius teigiamas');
} else {
    console.log('1.7 skaicius neigiamas');
}

// 1.8

if(a < 0) {
    console.log('1.8 skaicius neigiamas');
} else {
    console.log('1.8 skaicius teigiamas');
}

// 1.9 Ar antras skaičius dalinasi iš 4?

if(b % 4 != 0) {
    console.log('1.8 skaicius nesidalina is 4');
} else {
    console.log('1.8 skaicius dalinasi is 4');
}

// 1.10

if(c % 10 != 0) {
    console.log('1.8 skaicius nesidalina is 10');
} else {
    console.log('1.8 skaicius dalinasi is 10');
}

// 2

let age = 28;

if (age >= 18) {
    console.log('Jus galite balsuote');
} else if (age <= 18) {
    console.log('Jus negalite balsuoti');
}

// 3

let aValue = 9;
let bValue = 6;
let cValue = 10;

if ((aValue + bValue + cValue) / 3 >= 5){
    console.log('Teigiamas')
} else {
    console.log('neigiamas');
}

// 4

let xValue = 100;
let i = 0;;
if(xValue % 5 == 0) {
    for (let i = 1; i < 5; i++) {
        console.log('Lentele:', + (xValue * i));
    }
} else {
    console.log('skaicius nesidalina is 5')
}


if (xValue % 2 == 0){
    console.log('4.2:', (xValue * xValue) / 2);
}

if (xValue % 7 != 0){
    let ab = 88;
    console.log('4. Suma', (xValue + ab));
    console.log('4. Skirtumas:', (xValue - ab));
    console.log('4. Sandauga:', (xValue * ab));
    console.log('4. Dalmuo:', (xValue / ab));
} else {
    console.log('skaicius dalinasi is 7');
}

