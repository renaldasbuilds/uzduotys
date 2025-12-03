let value = Math.floor(Math.random() * 100);

// 1
if (xValue % 2 == 0) {
    console.log('1. skaicius', xValue ,'yra lyginis');
} else {
    console.log('1. skaicius', xValue ,'yra nelyginis');
}

// 2

if (xValue % 7 == 0) {
    console.log('2. Dalinasi is 7');
} else {
    console.log('2. Nesidalina is 7');
}

// 3

let file = "failas.txt";

if (file.endsWith('.txt')) {
    console.log('baigiasi su .txt');
} else {
    console.log('kitas failo tipas');
}