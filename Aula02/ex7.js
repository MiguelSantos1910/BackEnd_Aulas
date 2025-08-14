// Exemplo função

let n1 = 20, n2 = 50; // Declaração de constantes
let res1, res2; // Declaração de variáveis

// Função 1
function soma(){
    res1 = n1 + n2;
    console.log(res1);
    n1 = 15;
    n2 = 40;
    res1 = n1 + n2;
    console.log(res1);
}

// Função 2
function multiplicacao(){
    res2 = n1 * n2;
    n1 = 15;
    n2 = -43;
    console.log(res2);
}
soma()
multiplicacao()