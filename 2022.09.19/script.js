//FELIZ NATAL
function exibirFalasPn(){
    quant = parseInt(document.getElementById("txtFalas").value)
    document.getElementById("falasPN").innerHTML = ""
    for(i = 0; i < quant; i ++){
        document.getElementById("falasPN").innerHTML += "Ho Ho Ho Feliz Natal!<br>"
    }
}

const analisarTxt = function (){
    if(document.getElementById("select").value == "sim"){
        txt = window.localStorage.getItem("text")
    }else{
        txt = document.getElementById("txtInfo").value
    }
    
    vet = txt.split(" ")
    //Total de palavra no texto
    document.getElementById("txtTotalPal").innerHTML = vet.length
    
    //Palavras iniciadas com a letra M
    m = document.getElementById("initM")
    m.value = ""
    for(i = 0; i < vet.length; i ++){
        if(vet[i].charAt(0).toLowerCase() == 'm'){
            m.value += vet[i]+" ";
        }
    }
    //Primeira Palavra do texto
    document.getElementById("first").value = vet[0] || ""
    //Segunda Palava do texto
    document.getElementById("second").value = vet[1] || ""
    //Ultima palavra
    document.getElementById("lasted").value = vet[vet.length-1] || ""
}

const gravaValor = function(){
    valor = document.getElementById("txtInfo").value;
    window.localStorage.setItem("text",valor);
    window.open('analisarTxt.html','_self')
}

const getTextHome = function (){
    document.getElementById("txtHome").innerHTML = window.localStorage.getItem("text")
}