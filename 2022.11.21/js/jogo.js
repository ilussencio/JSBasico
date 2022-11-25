var imagens = ['imgCircle' ,'imgXis', ]
var imgAtual = 0;
var matriz;
function criarTabuleiro(){
    criarMatriz();
    for(var i = 0 ; i < 3 ;i++){
        for(var j = 0; j < 3; j++){
            var div = document.createElement("div");
            div.setAttribute("class","boxTabuleiro imgTabuleiro");
            div.setAttribute("id",`${i}_${j}`)
            div.addEventListener("click",inserirImg);
            document.getElementById("tabuleiro").appendChild(div);
            matriz[i][j] = "";
        }
    }
}

function inserirImg(evento){
    document.getElementById(evento.currentTarget.id).classList.add(imagens[imgAtual]);

    vetIndices = evento.currentTarget.id.split("_");
    matriz[vetIndices[0]][vetIndices[1]] = imgAtual;
    (imgAtual >= 1)? imgAtual = 0  : imgAtual ++

    checkGanhador();
}

function criarMatriz(){
    matriz = new Array(3); //Criando 3 posicoes
    for ( var i = 0; i < 3; i++ ){
        matriz[i] = new Array(3);
    }
}


function checkGanhador(){
    for(var i = 0; i < 3; i++){
        
    }
}
