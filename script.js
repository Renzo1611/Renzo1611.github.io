var encriptar= document.querySelector (".boton-encriptar")
var desencriptar= document.querySelector (".boton-desencriptar")
var resultado= document.querySelector (".mensaje-encriptado")
var mensajeParaEncriptar= document.querySelector (".texto-1")
var copiar= document.querySelector (".boton-copiar")
                    



function enviarMensaje (){

    desaparecer ()
    resultado.textContent = encriptarTexto (recuperarMensaje());
    
    
}

function desencriptarMensaje (){
    desaparecer ()
    resultado.textContent = desencriptarTexto (recuperarMensaje());
}

function desaparecer() {
    document.getElementById("Cuadro-encriptador").style.visibility = "hidden";

}

function recuperarMensaje(){
    var mensaje1= document.querySelector (".texto-1"); 
    return mensaje1.value;   

}


function copiarMensaje(){

    var mensajeCodificado=resultado.value
    navigator.clipboard.writeText(mensajeCodificado)
    
}

function encriptarTexto(mensaje){
    var texto= mensaje;
    var textoFinal="";

    for (var x=0; x < texto.length; x++){

        if (texto[x]=="e"){
            textoFinal = textoFinal + "enter";
        }

        else if (texto[x]=="i"){
            textoFinal = textoFinal + "imes";
        }

        else if (texto[x]=="a"){
            textoFinal = textoFinal + "ai";
        }

        else if (texto[x]=="o"){
            textoFinal = textoFinal + "ober";
        }

        else if (texto[x]=="u"){
            textoFinal = textoFinal + "ufat";
        }

        else {

            textoFinal = textoFinal + texto[x];
        }


    }

    return textoFinal;
}

function desencriptarTexto (mensaje) {
    var texto= mensaje;
    var textoFinal="";

    for (var y=0; y < texto.length; y++){

        if (texto[y]=="e"){
            textoFinal = textoFinal + "e";
            y=y+4;
        }

        else if (texto[y]=="i"){
            textoFinal = textoFinal + "i";
            y=y+3;
        }

        else if (texto[y]=="a"){
            textoFinal = textoFinal + "a";
            y=y+1;
        }

        else if (texto[y]=="o"){
            textoFinal = textoFinal + "o";
            y=y+3;
        }

        else if (texto[y]=="u"){
            textoFinal = textoFinal + "u";
            y=y+3;
        }

        else {

            textoFinal = textoFinal + texto[y];
        }


    }

    return textoFinal;


}




encriptar.onclick=enviarMensaje;
desencriptar.onclick=desencriptarMensaje;
copiar.onclick=copiarMensaje;
