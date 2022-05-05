//CREO UN CICLO CHE VA DA 1 A 100 ALL`INTERNO DI ".list"
const myList = document.querySelector(".list");

for (let i = 1; i <= 100; i++) {
    let myBox;
    //CREO DEGLI ELEMENTI ALL'INTERNO DEL CICLO

    //CREO DELLE ECCEZIONI PER GESTIRE LE VARIE CLASSI
    if (i % 3 === 0 && i % 5 === 0) {
        myBox = `<li class="box fizzbuzz-box">fizzbuzz</li>`;
    }

    else if (i % 3 === 0 && i % 5 !== 0) {
        myBox = `<li class="box fizz-box">fizz</li>`;
    } 
    
    else if (i % 5 === 0 && i % 3 !== 0) {
        myBox = `<li class="box buzz-box">buzz</li>`;
    }

    else {
        myBox = `<li class="box number-box">${i}</li>`;
    }

    //INSERISCO GLI ELEMENTI ALL'INTERNO DELL'HTML
    myList.innerHTML += myBox;
}

//PERSONALIZZO LE CLASSI COME DA RIFERIMENTO ALL'INTERNO DEL CSS


     

