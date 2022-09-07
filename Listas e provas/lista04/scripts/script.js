function entrar(){
    usuario = document.getElementById("login")
    senha = document.getElementById("senha")
    confSenha = document.getElementById("confSenha")

    if(usuario.value == ""){
        alert("Campo usuario invalido!")
        usuario.focus()
    }else if(senha.value == ""){
        alert("Campo senha invalida!")
        senha.focus()
    }else if(confSenha.value == ""){
        alert("Campo confirmar senha invalida!")
        confSenha.focus()
    }else if(senha.value != confSenha.value){
        alert("Os campos não são iguais!")
        senha.value = ""
        confSenha.value = ""
        senha.focus()
    }else{
        alert("Todos os campos foram digitador corretamente!")
    }

}