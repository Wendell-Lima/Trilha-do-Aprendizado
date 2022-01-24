var na = Math.floor(Math.random()*10);
console.log("Aleatório: "+na);

var nome = prompt("Digite seu nome: ");
nome = nome.charAt(0).toUpperCase() + nome.slice(1)

var emenor, emaior;

for(i=0;i<4;i++)
{
    if(i == 0){
        var numero = parseInt(prompt("Digite um número de 1 a 10: "));
    }
    if(i>0){
        numero = parseInt(prompt("Digite um número: "));
    }
    if(na == 0){
        na++;
    }
    
    if(numero == na){ //ganhou.
        alert(nome+" parabéns, você acertou!");
        i=4;
    }

    if(numero >= 1 & numero <= 10)
    {
        if(numero < na)
        {
            if(numero < emenor){
                emenor = emenor;
            }
            else{
                emenor = numero;    
            }
            
            if(emaior == undefined){
                emaior = 10;
            }
            if(numero == 1 & na != 2){
                emenor++;
            }
            alert(nome+" você errou.\nO valor está entre "+emenor+" e "+emaior+".");
        }
        if(numero > na)
        {
            if(numero>emaior){
                emaior = emaior;
            }
            else{
                emaior = numero;
            }
            
            if(emenor == undefined){
                emenor = 1;
            }
            if(numero == 10 & na != 9){
                emaior--;
            }
            alert(nome+" você errou.\nO valor está entre "+emenor+" e "+emaior+".");
        }
        
    } 
    else if(numero < 1 || numero > 10){
        i--;
        alert(nome+" seu cabeção!\nApenas números entre 1 e 10!")
    }
    console.log("Emenor: "+emenor+"\nEmaior: "+emaior);
}
if(i==4 & numero != na)
{
    alert(nome+" suas chances acabaram.\nO valor correto seria: "+na);
}