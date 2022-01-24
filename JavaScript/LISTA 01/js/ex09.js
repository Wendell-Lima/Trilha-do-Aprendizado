var n;

n = parseFloat(prompt("Digite um número: "));

if( n%3 == 0 & n%7 == 0){
    alert("O número é múltiplo de 3 e de 7.");
    throw new Error();
} 
if( n%3 == 0){
    alert("O número é múltiplo de 3.");
}
else if(n%7 == 0){
    alert("O número é múltiplo de 7.");
}
else{
    alert("O número NÃO é múltiplo de 3 e nem de 7.");
}