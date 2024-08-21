let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados= [];
let numeroMaximo= prompt ('Con cuántos números deseas jugar? ');



function crearVariables(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario===numeroSecreto){
        crearVariables('p', `Acertaste el número en ${intentos} ${(intentos===1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
        
    } else {
            if (numeroUsuario > numeroSecreto){
                crearVariables('p', 'El número secreto es menor'); 
                } else {
                    crearVariables('p', 'El número secreto es mayor');
                    }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= ' ';
}


function calculoNumeroSecreto() {
    let numeroSecreto= Math.floor(Math.random ()* numeroMaximo)+1;
    
    if (listaNumerosSorteados.length == numeroMaximo){
        crearVariables('p', 'Ya se jugaron todos los números posibles');
    } else{
            if (listaNumerosSorteados.includes(numeroSecreto)){
                return calculoNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroSecreto);
                return numeroSecreto;
            }
        }
    
}

function condicionesIniciales(){
    crearVariables('p', `Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= calculoNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
