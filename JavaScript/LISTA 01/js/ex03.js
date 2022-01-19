var n, i, aux, m;

parseFloat(aux);
parseFloat(m);
aux = 0;

for(i=1;i<5;i++){
    n = parseFloat(prompt("Digite a "+i+"ª nota: "))
    aux = aux + n;
}
m = aux/4;

if (m>8.9 & m<11){
    alert("Conceito A");
}
if (m>7.9 & m<9){
    alert("Conceito B");
}
if (m>6.9 & m<8){
    alert("Conceito C");
}
if (m<7){
    alert("Conceito D");
}

document.write("<h2> A média é " +aux/4+ " </h2>");
