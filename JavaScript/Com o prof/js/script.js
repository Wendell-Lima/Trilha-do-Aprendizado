function enviar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var status;


    if(nome.value != ""  && nome.value.indexOf(" ")!=-1){ //index.of analisa se tem espaço pro sobrenome
        if(email.value.indexOf("@")!=-1){
            alert(nome.value+", agradecemos o seu contato.");
            status = true;
        }
        else{
            alert("Digite um e-mail válido!");
            status = false;
        }
    }
        
    else{
        status = false;
        alert("Preencha o seu nome completo!")
    }

    return(status);
}   