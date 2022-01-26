var v = [4, 8, 7, 6];

//alert(v);
//alert(v[1]);

v[2] = 3;

//alert(v);   

var soma = v[0]+v[3];

//alert("A soma do elemento 0 com o elemento 3 do vetor é: "+soma);

lista = ["Juca Bala", 1910, "Rua A", "Irati", "PR", 80.5]
alert(lista);
alert(lista[0]);

for(var i=0; i<lista.length; i++){ 
    //lista.length vá até o final da lista, independente do tamanhbo
    document.write("<h2>"+lista[i]+"</h2>");
}

lista.push("84500-000"); // push = adiciona um valor na ultima posição.
alert(lista);
lista.pop(); // pop = remove o ÚLTIMO elemento da lista.
alert(lista);
lista.unshift("Tonhão"); // unshift = adiciona um item na primeira posição da lista
alert(lista);
lista.shift();  // shift = remove o primeiro item da lista.
alert(lista);

var indice;

indice = lista.indexOf("CWB"); // indexOF = retorna o indice de um valor procurado.
//Se retornar -1 = ele não achou o valor procurado...
// ----------------------MUUUUUUUUUUUUUUITO IMPORTANTE-------------------------------

alert(indice);
