/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

/* ToDo
Remover o texto em area do card com a imagem
inoputar o texto criptografado direto no card
*/

const textoCriptografar = [];
const textoDescriptografar = [];

function pegarTexto() {
    const texto = document.getElementById("textoDigitado").value;
    const quebraTexto = texto.split("");    
    let textoConvertido = "";
    for (let i = 0; i < quebraTexto.length; i++) {
        if (quebraTexto[i] === "e" || quebraTexto[i] === "E") {
            textoConvertido += "enter";
        } else if (quebraTexto[i] === "i" || quebraTexto[i] === "I") {
            textoConvertido += "imes";
        } else if (quebraTexto[i] === "a" || quebraTexto[i] === "A") {
            textoConvertido += "ai";
        } else if (quebraTexto[i] === "o" || quebraTexto[i] === "O") {
            textoConvertido += "ober";
        } else if (quebraTexto[i] === "u" || quebraTexto[i] === "U") {
            textoConvertido += "ufat";
        } else {
            textoConvertido += quebraTexto[i];
        }
    } 
    textoCriptografar.push(textoConvertido);    
    const mostraTextoCriptografado = document.getElementById("textoDescriptografado");
    mostraTextoCriptografado.innerHTML = textoConvertido;   
    
    limparTexto();
}

function limparTexto() {
    document.getElementById("textoDigitado").value = "";
    document.getElementById("card_texto").setAttribute("hidden", "true");
    document.getElementById("procurando").setAttribute("hidden", "true");
    document.getElementById("textoDescriptografado").setAttribute("styke", "display: block;");

    // document.getElementById("textoDescriptografado").innerHTML = "";
}

function copiarTexto() {
    const texto = document.getElementById("textoDescriptografado");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado");
}



function descriptografarTexto (){
    const texto = textoCriptografar[0];
    let textoDescriptografado = "";          
    const voltarTexto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    textoDescriptografado = voltarTexto;
    textoDescriptografar.push(textoDescriptografado);    
    const mostraTextoDescriptografado = document.getElementById("textoDigitado");
    mostraTextoDescriptografado.innerHTML = textoDescriptografado;  
    
}


