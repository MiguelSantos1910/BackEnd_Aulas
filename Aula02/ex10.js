// Capturando dados digitados pelo usuário
let readline = require('readline');
const rl = readline.createInterface({ // Cria a interface de leitura
    input:process.stdin,
    output:process.stdout
});

// Pergunta o primeiro valor
rl.question('Digite o primeiro valor: ', (valor1) =>{
    rl.question('Digite o segundo valor: ', (valor2) => {
        console.log('Primeiro valor digitado: ', valor1);
        console.log('Segundo valor digitado: ', valor2);
        console.log(valor1 + valor2);
        console.log(Number(valor1)+ Number(valor2)); // Com Number converte para número
        rl.close(); // Fecha a interface
    })
})