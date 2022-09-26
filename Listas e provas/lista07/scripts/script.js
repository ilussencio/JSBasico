function validadeNome(){
    nomeCompleto = document.getElementById("nomeCompleto").value;
    if(nomeCompleto == "") {
        msgError("Digite o seu nome completo para continuar!")
    }
    else if(nomeCompleto.split(" ").length < 2){
        msgError("Por favor digite um nome com no minimo um sobrenome termos!")
    }else{
        window.localStorage.setItem("nomeCompleto", nomeCompleto);
        window.open("menu.html","_self");
    }
}

function iniciarMenu(){
    nomeCompleto = window.localStorage.getItem("nomeCompleto").split(" ");
    document.getElementById("msgInicial").innerHTML = `${nomeCompleto[0]} ${nomeCompleto[nomeCompleto.length-1]}, Seja bem-vindo ao jogo dos Felinos!`;
}
function msgError(msg){
    document.getElementById("msgError").innerHTML = "Erro : "+msg
}
function gato01(){
    nome = window.localStorage.getItem("nomeCompleto").split(" ")[0]
    alert(`Oi ${nome}, tudo bem com você?`)
}

function gato02(){
    document.getElementById("contGato").innerHTML = parseInt(document.getElementById("contGato").innerHTML) + 1;
}

function gato03(id){
    document.getElementById("gato").src = `./Imagens/gato0${id}.gif`;
}

function gato04(id){
    if(id == 1)
        document.getElementById("msgGato04").innerHTML = "Ai, pare de fazer cócegas!"
    else
        document.getElementById("msgGato04").innerHTML = "lá lá lá lá lá lá"
}

function gato05(){

    document.getElementById("cxNumero").value = Math.floor(Math.random() * 100) + 1;
}