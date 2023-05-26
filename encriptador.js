//Defincion de Funciones//
function encriptar(mensajeE) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeE = mensajeE.toLowerCase();

    if (mensajeE =="") {
        alert("Debes Ingresar el mensaje que quieres encriptar")
        mensajeE="Ningún mensaje fue encontrado"        

    } else {
        for (let i = 0; i < codigo.length; i++) {
            if (mensajeE.includes(codigo[i][0])) {
                mensajeE = mensajeE.replaceAll(codigo[i][0], codigo[i][1])
            }            
        }     

    }
    return mensajeE;
}
function btnEncriptar() {
    const mensaje = encriptar(textoIn.value);
    textoOut.value = mensaje;
    textoIn.value = "";

}

function desencriptar(mensajeE) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeE = mensajeE.toLowerCase();

    if (mensajeE =="") {
        alert("Debes Ingresar el mensaje que quieres encriptar")
        mensajeE="Ningún mensaje fue encontrado"        

    } else {
        for (let i = 0; i < codigo.length; i++) {
            if (mensajeE.includes(codigo[i][1])) {
                mensajeE = mensajeE.replaceAll(codigo[i][1], codigo[i][0])
            }            
        }       

    }
    return mensajeE;  

}

function btnDesencriptar() {
    const mensaje = desencriptar(textoIn.value);
    textoOut.value = mensaje;
    textoIn.value = "";

}


function copiar(data) {

    if(data == ""){
        alert("No hay mensaje para copiar")
    }else{navigator.clipboard.writeText(data);
        textoIn.value = "";
        alert("copiado"); 
    }
}
function btnCopiar() {
    copiar(textoOut.value);   
}



const textoIn = document.querySelector(".input_texto_in");
const textoOut = document.querySelector(".input_texto_out");













