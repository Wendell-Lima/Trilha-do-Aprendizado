// 1,2,4,8,16 razao = 2

var pt,r,q,s;

pt = parseFloat(prompt("Digite o primeiro termo: "));

r = parseFloat(prompt("Digite a razão: "));

q = parseInt(prompt("Digite a quantidade de termos a ser gerado: "));

for(var i=0; i<q; i++)
{
    document.write("<h2>"+pt+"</h2>");
    pt = pt*r;
}