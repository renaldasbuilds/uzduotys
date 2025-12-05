window.addEventListener("load", function() {
    let current = 0; // rodom pirma kortele
    let slider = document.getElementById("sliderRange");

    // sliderio reiksme
    let range = parseInt((slider.value));

    // produktai
    let eggs = 0;
    let flour = 0;
    let berries = 0;
    let sugar = 0;


    function updateValues(){
        switch(current){
            // vistiena
            case 0:
                eggs = range * 2;
                flour = range * 500;
                berries = range * 100;
                sugar = range * 2;
                break;
            // tortas
            case 1:
                eggs = range * 1;
                flour = range * 300;
                berries = range * 50;
                sugar = range * 5;
                break;
            // makaronai    
            case 2:
                eggs = range * 3;
                flour = range * 250;
                berries = range * 10;
                sugar = range * 1;
                break;     
            default:
                return;   
        }

        document.getElementById('eggs').innerHTML = `${eggs}g`;
        document.getElementById('flour').innerHTML = `${flour}g`;
        document.getElementById('berries').innerHTML = `${berries}g`;
        document.getElementById('sugar').innerHTML = `${sugar}g`;
    }
    

    document.querySelectorAll(".card").forEach(function (card, index) {
        card.addEventListener("click", function() {   
            console.log('kortele');
            current = index;
            range = parseInt((slider.value));
            updateValues();

            document.getElementById("card-id").innerHTML = `${current}`;
            document.getElementById("slider-value").innerHTML = `${range}`;
            

            // ciklas per visus 
            document.querySelectorAll(".selected-mark").forEach(function(selected){
                    selected.innerHTML = ` `;
            });

            card.querySelector(".selected-mark").innerHTML = `
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#0FC261"/>
                <line x1="6.35355" y1="9.64645" x2="12.3536" y2="15.6464" stroke="white"/>
                <line x1="11.6464" y1="15.6464" x2="19.6464" y2="7.64645" stroke="white"/>
                </svg>
            `;
        });
    });

    slider.addEventListener("input", function (){
        range = parseInt((slider.value));
        updateValues();
        document.getElementById("card-id").innerHTML = `${current}`;
        document.getElementById("slider-value").innerHTML = `${range}`;
    });
    updateValues();

});
