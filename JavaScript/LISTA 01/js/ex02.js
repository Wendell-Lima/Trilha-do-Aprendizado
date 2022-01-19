var q, m, r, d;

q = prompt("Você gostaria de qual tipo de conversão?\n Digite (1) para converter do Real para Dolar\n Digite (2) para converter do Dolar para Real.");

m = parseFloat(prompt("Digite o valor:"));

switch (q) {
    case"1":
        d = m *0.18;
        alert("Conversão ="+d);
    break;

    case"2":
        r = m * 5.52;
        alert("Conversão ="+r);
    break;
    
    default:
        alert("opa, deu ruim. É apenas 1 e 2, hein!");
    break;        
}

