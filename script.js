var butoes__main__cod = document.querySelector(".butoes__main__cod");
var butoes__main__descod = document.querySelector(".butoes__main__descod");
var boneco = document.querySelector(".segundasection__conteudo");
var conteudo = document.querySelector(".segundasection__conteudo__paragrafo");
var resultado = document.querySelector(".texto-resultado");

butoes__main__cod.addEventListener("click", codificar);
butoes__main__descod.addEventListener("click", decodificar);

function codificar() {
    ocultarBoneco();
    var caixadetexto = recuperarTexto();
    resultado.textContent = encriptarTexto(caixadetexto); 
}

function decodificar() {
    ocultarBoneco();
    var caixadetexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caixadetexto); 
}

function recuperarTexto(){
    var caixadetexto = document.querySelector(".caixadetexto textarea");
    return caixadetexto.value;
}

function ocultarBoneco(){
    boneco.classList.add("ocultar");
    conteudo.classList.add("ocultar");
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i++;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 4;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".botaocopiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("OLA"); 
});
