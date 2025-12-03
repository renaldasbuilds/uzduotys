let a = 7;
let b = 24;
let c = 15;

// 1

//1.1
if(a > b) {
    console.log('1.1 a didesnis už b');
} else {
    console.log('1.1 a nera didesnis uz b');
}

//1.2
if(b > c){
    console.log('1.2 b didesnis uz c');
} else {
    console.log('1.2 b nera didesnis uz c');
}
// 1.3
if(a > c) {
    console.log('1.3 a didesnis uz c');
} else {
    console.log('1.3 a nera didesnis uz c');
}

// 1.4

if(a == b) {
    console.log('1.4 a ir b yra lygus');
} else {
    console.log('1.4 a ir b nera lygus');
}

// 1.5
if(b == c) {
    console.log('1.5 b ir c yra lygus');
} else {
    console.log('1.5 b ir c nera lygus');
}

// 1.6
if (a == 0) {
    console.log('1.6 a yra lygos 0')
} else {
    console.log('1.6 a nera lygus 0');
}

// 1.7
if (b < 0) {
    console.log('1.7 b yra neigiamas');
} else {
    console.log('1.7 b yra teigiamas');
}

// 1.8
if (c < 0) {
    console.log('1.7 c yra neigiamas');
} else {
    console.log('1.7 c yra teigiamas');
}


// 2
let mark = Math.floor(Math.random() * 10);
console.log(mark);
if(mark == 10) {
    console.log('Puiku');
} else if (mark >= 9) {
    console.log('Labai gerai');
}
else if (mark >= 5) {
    console.log('Gerai');
}
else if (mark < 5) {
    console.log('egzamians neislaikytas');
}