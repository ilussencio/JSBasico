function validationForm(){
    username = document.getElementById("username")
    password = document.getElementById("password")
    if(username.value == ""){
        alertWifi("Usuario invalido, tente novamente!",false,0,"img/toupeira.gif",20)
        password.focus()
    }
    else if(password.value == ""){
        alertWifi("Senha invalida, tente novamente!",false,0,"img/toupeira.gif",20)
        password.focus()
    }
    else{
        readJson(username.value, password.value);
        //alertWifi(`Ola, ${username.value}`,false,0,"img/toupeira.gif",20)
    }
}

function readJson(username, password){
    var file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json"
    fetch(file)
        .then((response) => response.json())
        .then((content) => checkUser(content,username,password))
        .then((err) => console.log(`${err} erro na leitura do JSON`));
}
function checkUser(content, username, password){
    var achou = false
    for(i=0; i < content.usuarios.length; i++){
        if(content.usuarios[i].user == username && content.usuarios[i].pwd == password){
            achou = true
            break
        }
    }

    if(achou)
        alertWifi(`Ola, ${username}`,false,0,"img/toupeira.gif",20)
    else
        alertWifi(`Usuario ou senha invalido!`,false,0,"img/toupeira.gif",20)
}