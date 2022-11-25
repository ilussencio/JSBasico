function validateLogin(){
    user= document.getElementById("user");
    pwd= document.getElementById("pwd");

    if(!user.value) alert(`Usuário em branco. Informe um usuário`);
    else if(!pwd.value) alert(`Senha em branco. Informe uma senha`);
    else processLogin(user.value, pwd.value);
}

function processLogin(user, pwd){
    file = "json/users.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, user, pwd))
        .catch(err => alert(`Problemas na leitura do Json!`))
}

function checkUserLogin(content, user, pwd){
    var achouUser = false;
    for (var i = 0; i < content.usuarios.length; i++){
        if((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd) ){
            achouUser = true;
            break;
        }
    }
    if (achouUser) alert("Usuário existente!")
    else alert("Usuário inexistente!")
}