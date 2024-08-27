
const entradaTexto = document.getElementById("entradaTexto"); 
const resultado = document.getElementById("resultado"); 


function encriptar() {
    const texto = entradaTexto.value; 
    
    console.log("Se ingresó el siguiente texto: ", texto); 

    if (!texto.trim()) {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return;
    }

    const mayusculasTildes = /[A-ZÁÉÍÓÚáéíóú]/;
    if (mayusculasTildes.test(texto)) {
        alert("No se permiten mayúsculas y/o tildes");
        return;
    }

    const encriptacion = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resultado.value = encriptacion;

    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

function desencriptar() {
    const textoEncriptado = entradaTexto.value; 
    
    console.log("Se ingresó el siguiente texto: ", textoEncriptado); 
   
    const desencriptacion = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

   
    resultado.value = desencriptacion;
    
    document.getElementById("placeholder").style.display = "none";
    resultado.style.display = "block";
    document.getElementById("btnCopiar").style.display = "block";
}

function copiar() {
    resultado.select(); 
    document.execCommand("copy"); 
    alert("Texto copiado al portapapeles"); 
}


entradaTexto.addEventListener("input", function () {
    if (entradaTexto.value.trim() === "") {
        
        placeholder.style.display = "flex";
        resultado.style.display = "none";
        btnCopiar.style.display = "none";
    }
});