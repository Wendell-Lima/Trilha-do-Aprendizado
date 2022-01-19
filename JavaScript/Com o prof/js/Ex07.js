/* Crie um script JS, em que o usuário entre com o ano de nascimento e também pergunte se ele foi aprovado na prova prática de direção. Caso cumpram-se os requisitos o site deve retornar a informação de que ele esta apto ou inapto para obter a CNH. Se for inapto diga em qual requisito ele reprovou.*/

var a1,p1, i, 

a1 = prompt("Em qual ano você nasceu? ")


i= 2021-parseInt(a1);

if(i>=18)
{
    p1 = prompt("Você foi aprovado na prova prática de direção? (s ou n) ")

    if(p1=="s")
    {       
        alert("Parabéns! Você está apto a receber a CNH")
    }
    else{
        alert("Infelizmente você não está apto a receber a CNH, você não passou na prova.")
    }
}
else{
    alert("Infelizmente você não está apto a receber a CNH, você não possui 18 anos.")
}