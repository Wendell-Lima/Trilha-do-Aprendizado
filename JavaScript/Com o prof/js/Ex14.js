function somar(){
    var n1,n2,resultado;


    // se o formulário for do tipo texto, devo converter aqui com parseFloat() ou parseInt()...

    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)

    resultado = n1+n2;

    document.getElementById("resultado").innerHTML = `O resultado da soma é ${resultado}` 

}   