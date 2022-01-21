var n, me, ma;


for(var i=1; i<6; i++){
    n = parseInt(prompt("Digite o "+i+"º número:"));


    if(i==1){
        me = n;
        ma = n;
    }

    if(n<me){
        me = n;
    }

    if(n>ma){
        ma = n;
    }

}

alert("O maior valor é: "+ma+ "\nE o menor é: "+me); 