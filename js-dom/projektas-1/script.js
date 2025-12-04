let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {
    //console.log('clicked');
    /* gaunam input'us / F12 galima paziuret koks yra value */
    /* parseInt - paverciam i INT skaicius */
    /* value - gaunam input reiksme */
    let employeesCount  = parseInt(document.getElementById('employees-count').value);
    let makesPerDay     = parseInt(document.getElementById('employee-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);


    let bakeryTotal = employeesCount * makesPerDay;

    let isMakeIt = bakeryTotal >= dayReservations;
    // let info = {
    //     bakeryTotal,
    //    isMakeIt
    // };
    // console.log(info);

    let results = document.getElementById('results');
    results.innerHTML = `<p><strong>Per diena spes pagaminti:</strong> ${bakeryTotal}</p>`;
    results.innerHTML += `<p><strong>Reikia speti pagaminti:</strong> ${dayReservations}</p>`;
    results.innerHTML += `<p><strong>Ar spes pagaminti?</strong> ${isMakeIt ? 'taip' : 'ne'}</p>`;
}); 

document.getElementById('employees-count').addEventListener('keyup', function(event){

    // console.log('reiksme pasikeite');
    let = inputValue = event.target.valueAsNumber;

    if(inputValue < 0) {
       // console.log(event.target);
        event.target.classList.add('error'); // pridedam class="error" in input'a employees-count
        event.target.nextElementSibling.classList.add('show'); // parodom span elementa
    } else {
        event.target.classList.remove('error'); // istrinam class="error" in input'a employees-count
        event.target.nextElementSibling.classList.remove('show'); // istrinam span elementa
    }
});

document.getElementById('reset').addEventListener('click', function () {
//    console.log('paspausta');
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;


    document.getElementById('results').innerHTML = '<p>Kolkas nieko nera</p>';
});