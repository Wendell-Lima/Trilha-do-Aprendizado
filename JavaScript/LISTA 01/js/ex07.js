//Elabore um script em que seja possível entrar com dados: idade e sexo de 5
//pessoas.

var contm = 0,contf = 0,contmaior = 0,contmenor = 0,contmm = 0,contmf = 0;
var idade,sexo;
var maiorm,maiorf,menorm,menorf;


for(var i=1; i<6; i++)
{
    sexo = prompt("Digite o sexo da "+i+"ª pessoa: \nM --> Masculino\nF --> Feminino");
    idade = parseInt(prompt("Digite a idade da "+i+"ª pessoa: "));

    if(i==1 & sexo=='M'){
        contm++; // contador de quantos homens tem.
        maiorm = idade;
        menorm = idade;
    }
    else if(i==1 & sexo=='F'){
        contf++;
        maiorf = idade;
        menorf = idade;
    }

    if(i==2 & sexo=='M'){
        contm++; 

        if(maiorm == undefined){
            maiorm = idade;
            menorm = idade;
        }
    }
    else if(i==2 & sexo=='F'){
        contf++;

        if(maiorf == undefined){
            maiorf = idade;
            menorf = idade;
        }
    }
    
    if(i==3 & sexo=='M'){
        contm++;
        if(maiorm == undefined){
            maiorm = idade;
            menorm = idade;
        } 
    }
    else if(i==3 & sexo=='F'){
        contf++;
        if(maiorf == undefined){
            maiorf = idade;
            menorf = idade;
        }
    }
    
    if(i==4 & sexo=='M'){
        contm++;
        if(maiorm == undefined){
            maiorm = idade;
            menorm = idade;
        } 
    }
    else if(i==4 & sexo=='F'){
        contf++;
        if(maiorf == undefined){
            maiorf = idade;
            menorf = idade;
        }
    }

    if(i==5 & sexo=='M'){
        contm++;
        if(maiorm == undefined){
            maiorm = idade;
            menorm = idade;
        } 
    }
    else if(i==5 & sexo=='F'){
        contf++;
        if(maiorf == undefined){
            maiorf = idade;
            menorf = idade;
        }
    }


    if(sexo=='M' & idade>maiorm){
        maiorm=idade;
    }
    else if(sexo=='F' & idade>maiorf){
        maiorf=idade;
    }

    if(sexo=='M' & idade<menorm){
        menorm=idade;
    }
    else if(sexo=='F' & idade<menorf){
        menorf=idade;
    }


    if(idade>=18){
        contmaior++; // cont de quantos maiores de idade que tem.
    }
    else{
        contmenor++; // cont de quantos menores de idade que tem.
    }

    if(idade>=18 & sexo=='M'){
        contmm++; // cont de quantos HOMENS maiores de idade que tem.
    }
    if(idade>=18 & sexo=='F'){
        contmf++; // cont de quantas MULHERES maiores de idade que tem.
    } 
}

alert(contm+" Pessoas são do sexo masculino.\nE "+contf+" Pessoas são do sexo feminino.")
alert(contmaior+" Pessoas são maiores de idade\nE "+contmenor+" Pessoas são menores de idade.")
alert("O homem mais velho possui "+maiorm+" anos\nE o mais novo possui "+menorm+" anos.")
alert("A mulher mais velha possui "+maiorf+" anos\nE a mais nova possui "+menorf+" anos.")
alert(contmm+" Homens são maiores de idade.\ne "+contmf+" Mulheres são maiores de idade.")