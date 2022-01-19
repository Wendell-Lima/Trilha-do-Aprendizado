var n,i,r

n = parseInt(prompt("Digite o valor para a tabuada: "));


for(i=0;i<11;i++){
    r=n*i;
    document.write("<h2>" +r+ " </h2>"); /* Entre os angulares eu coloco a tag html. */
}