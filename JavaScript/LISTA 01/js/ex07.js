//Elabore um script em que seja possível entrar com dados: idade e sexo de 5
//pessoas.

var m1,m2,m3,m4,m5,f1,f2,f3,f4,f5;
var id1,id2,id3,id4,id5,id6,id7,id8,id9,id10;
var contm = 0,contf = 0,contmaior = 0,contmenor = 0,contmm = 0,contmf = 0;
var idade,sexo;
var maiorm,maiorf,menorm,menorf;


for(var i=1; i<6; i++)
{
    sexo = prompt("Digite o sexo da "+i+"ª pessoa: \nM --> Masculino\nF --> Feminino");
    idade = parseInt(prompt("Digite a idade da "+i+"ª pessoa: "));


    if(i==1 & sexo=='M'){
        contm++; // contador de quantos homens tem.
        id1=idade;
        maiorm = idade;
        menorm = idade;
    }
    else if(i==1 & sexo=='F'){
        contf++;
        id6=idade;

        maiorf = idade;
        menorf = idade;
        
    }

    if(i==2 & sexo=='M'){
        contm++; 
        id2=idade;
        if(maiorf != 0){
            maiorm = idade;
            menorm = idade;
        }
    }
    else if(i==2 & sexo=='F'){
        contf++;
        id7=idade;
        if(maiorm != 0){
            maiorf = idade;
            menorf = idade;
        }
    }
    

    if(i==3 & sexo=='M'){
        contm++; 
        id3=idade;
    }
    else if(i==3 & sexo=='F'){
        contf++;
        id8=idade;
    }
    
    if(i==4 & sexo=='M'){
        contm++; 
        id4=idade;
    }
    else if(i==4 & sexo=='F'){
        contf++;
        id9=idade;
    }

    if(i==5 & sexo=='M'){
        contm++; 
        id5=idade;
    }
    else if(i==5 & sexo=='F'){
        contf++;
        id10=idade;
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
        contmm++;
    }
    if(idade>=18 & sexo=='F'){
        contmf++;
    } 
}

alert(contm+" Pessoas são do sexo masculino.\nE "+contf+" Pessoas são do sexo feminino.")
alert(contmaior+" Pessoas são maiores de idade\nE "+contmenor+" Pessoas são menores de idade.")
alert("O homem mais velho possui "+maiorm+" anos\nE o mais novo possui "+menorm+" anos.")
alert("A mulher mais velha possui "+maiorf+" anos\nE a mais nova possui "+menorf+" anos.")
alert(contmm+" Homens são maiores de idade.\ne "+contmf+" Mulheres são maiores de idade.")