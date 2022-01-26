// Função sem retorno
function somar(n1,n2){
    var r;
    r= n1 + n2;
    alert("Função de soma sem retorno! \nO resultado é: "+r);
}

// Função com retorno
function subtrair(n1,n2){
    var r;
    r = n1 - n2;
    return(r)
}


somar(10,5);
var resultado = subtrair(10,5);

alert("Função subtrair com retorno!\nO resultado é: "+resultado)