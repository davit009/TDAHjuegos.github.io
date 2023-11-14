let preguntas = ["¿Que es la electricidad?", "¿Cuál es la unidad de medida de la corriente eléctrica?", "¿Qué dispositivo se utiliza para medir la corriente eléctrica?", "¿Cuál es la fórmula de la fuerza en física?", "¿Qué es un conductor eléctrico?"];


let correcta = [2,2,1,1,0];


let opciones = [];

opciones.push(["forma de luz ", "flujo de agua", "un tipo de energia"]);
opciones.push(["voltio.", "watt", "amperio"]);
opciones.push(["termometro.", "Voltimetro", "Barometro"]);
opciones.push(["Fuerza = Masa / Aceleración", "Fuerza = Masa x Aceleración", " Fuerza = Masa + Aceleración"]);
opciones.push(["Un material que permite el paso fácil de la electricidad.", "Un dispositivo que almacena electricidad.", "Una persona que repara circuitos eléctricos. "]);


let posActual = 0;

let cantidadAcertadas = 0;

function comenzarJuego(){

    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarImagenes();

}


function cargarImagenes(){
 
    if(preguntas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("pregunta").innerHTML = " " + preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

     
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
   
    setTimeout(cargarImagenes,1000);
}
function terminarJuego(){
    
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
   
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio(){
  
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}