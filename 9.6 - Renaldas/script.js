let workHours      = 8; // darbo valandos
let totalWorkers   = 5; // darbuotoju
let breadPerWorker = 3; // kiek iskepa per valanda
let breadPrice     = 2; // savikaina
let breadSale      = 4; // pardavimo kaina
let breadOrders    = Math.floor(Math.random() * 200);; // duonos orderiai

let breadsPerDay = totalWorkers * breadPerWorker * workHours;
let cost    = breadsPerDay * breadPrice; // savikaina
let revenue = breadsPerDay * breadSale; // pajamos
let profit  = revenue - cost; // profito dalis

console.log('Per', workHours,'h. iskepta:', breadsPerDay);
console.log('Savikaina:', cost);
console.log('Pajamos:', revenue);
console.log('Pelnas:', profit);

if(breadsPerDay >= breadOrders) {
    console.log('Spes iskept');
} else {
    console.log('Nespes iskept. Pritruks:', breadOrders - breadsPerDay);  
}