// 0 1 1 2 3 5 8 13

var q;
var soma = 0;
var p = 0;
var u = 1;

q = parseInt(prompt("Digite quantos elementos do fibonacci deseja gerar: "));

for(var i=0; i<q ; i++){
    document.write("<h2>"+p+"</h2>")
    soma = p + u;
    p = u;
    u = soma;
}
