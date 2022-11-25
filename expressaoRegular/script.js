//Padrao: verifica se possui algum digito
function containsDigit (texto){
    return /\d/.test(texto);
}
//Padrao: inicio com dois digitos
function twoDigitInit(texto){
    return /^\d{2}/.test(texto);
}
//Padrao: dois digitos no final
function twoDigitFinal(texto){
    return /\d{2}$/.test(texto);
}
//Padrao: exatamente dois digitos
function twoDigit(text){
    return /^\d{2}$/.test(text);
}
//Padrao: telefone 91234-1234 ou (034)1234-1234
function isFone(texto){
    return /^\d{4,5}-\d{4}$/.test(texto);
}
//Padrao: telefone com ddd (034)91234-1234 ou (034)1234-1234
function isFoneDDD(texto){
    return /^\(\d{2,3}\)\d{4,5}-\d{4}$/.test(texto)
}
//Padrao: cep 11.111-111
function isCEP(texto){
    return /^\d{2}\.\d{3}-\d{3}$/.test(texto);
}
//Padrao: validar numero de matricula {curso}-1234 on {curso} poderia ser TSPI, LCO e MKT, seguindo de um traco + 4 a 5 digitos
function matricula(texto){
    return /^(TSPI|LCO|MKT)-\d{4,5}$/i.test(texto)
    //return /^(TSPI|LCO|MKT)-\d{4,5}$/i.test(texto) // Apos expressao o i iguinra maiusculo e minusculo
    //return /^TSPI-\d{4,5}$/.test(texto)
}
//Padrao: IFTM Uberlândia centro ou IFTM         Uberlândia centro 
function matricula02(texto){
    return /^IFTM \s{1,5}Uberlândia Centro$/.test(texto)
}
//Padrao: para aceitar de 3 a 10 caracteres alfanumericos (lestra e/ou numeros)
function matricula03(texto){
    return /^\w{3,10}$/.test(texto)
}
//Padrao: para verificar todas as palavras compostas por uma ou mais das seguintes letras a,e,i,o,u,b,c,d,f
function verify(texto){
    return /^[aeioubcdf]{2,}$/i.test(texto)
   //return /^[aeioubcdf]{2,15}$/i.test(texto)
}
//Padrao: IFTM-1234-TSPI:9Z
function iftm(texto){
    return /^(i|I)(f|F)(t|T)(m|M)-\d{4,6}-(TSPI|LCO|MKT):\d{1}[A-Z]{1}$/.test(texto)
}

function conferir(){
    texto = document.getElementById("txtValor").value
    if(iftm(texto))
        alert("Padrao valido")
    else
        alert("Padrao invalido")
}