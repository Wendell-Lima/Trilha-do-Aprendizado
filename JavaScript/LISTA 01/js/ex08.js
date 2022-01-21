// 7! 7x6x5x4x3x2x1
// 7x6 = 42
// 42x5 = 210
// 210x4 = 840
// 840x3 = 2520
// 2520x2 = 5040

var n, aux = 1;

n = parseInt(prompt("Digite um número para ser fatoriado: "))

for(var i=1; i<=n; i++)
{
    aux = aux*i;
}
alert(aux)