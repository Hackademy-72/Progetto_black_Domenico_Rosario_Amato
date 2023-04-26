// CATTURA METEORA
let metoeraIcon = document.querySelector(`#metoeraIcon`);

let loremMeteora = document.querySelector(`#loremMeteora`);

// CATTURA RAZZO
let razzoIcon = document.querySelector(`#razzoIcon`);

let loremRazzo = document.querySelector(`#loremRazzo`);

// CATTURA SOLE
let soleIcon = document.querySelector(`#soleIcon`);

let loremSole = document.querySelector(`#loremSole`);

// CATTURA ASTRONAUTA
let astronsutaIcon = document.querySelector(`#astronsutaIcon`);

let loremAstronauta = document.querySelector(`#loremAstronauta`);

// CATTURA LUNA
let lunaIcon = document.querySelector(`#loremLuna`);

let loremLuna = document.querySelector(`#loremLuna`);


// VARIABILI D'APPOGGIO
let check= false;

let conferma = true;


// PARAGRAFO METEORA 

metoeraIcon.addEventListener(`mouseenter`,()=>{

if(check == false){

    loremMeteora.style.transform = `translatex(230px)`;
    
    loremMeteora.style.transitionDuration = `4s`;

    check = true;
} else{

    loremMeteora.style.transform = `translate(0px)`;

    check = false;
}


})

// PARAGRAFO RAZZO

razzoIcon.addEventListener(`mouseenter`,()=>{

    if(check == false){
    
        loremRazzo.style.transform = `translate(230px)`;
        loremRazzo.style.transitionDuration = `4s`;
    
        check = true;
    } else{
    
        loremRazzo.style.transform = `translate(0px)`;
    
        check = false;
    }
    
    
    })

// PARAGRAFO SOLE

    
soleIcon.addEventListener(`mouseenter`,()=>{

    if(check == false){
    
        loremSole.style.transform = `translate(125px)`;
        loremSole.style.transitionDuration = `4s`;
    
        check = true;

        conferma= true;
   
    } else if(conferma == false && check == true){
    
        loremSole.style.transform = `translate(0px)`;
        
    
        check = false;
    
   
    }  else if(conferma == true && check == true){

        loremSole.style.transform = `translate(-130px)`;
        loremSole.style.transitionDuration = `4s`;

        check = true;

        conferma = false;

    }
    
    
    })

//ASTRONAUTA 

astronsutaIcon.addEventListener(`mouseenter`,()=>{

    if(check == false){
    
        loremAstronauta.style.transform = `translate(-225px)`;
        loremAstronauta.style.transitionDuration = `4s`;
    
        check = true;
    } else{
    
        loremAstronauta.style.transform = `translate(0px)`;
    
        check = false;
    }
    
    
    })

// LUNA

lunaIcon.addEventListener(`mouseenter`,()=>{

    if(check == false){
    
        loremLuna.style.transform = `translate(-225px)`;
        loremLuna.style.transitionDuration = `4s`;
    
        check = true;
    } else{
    
        loremLuna.style.transform = `translate(0px)`;
    
        check = false;
    }
    
    
    })


