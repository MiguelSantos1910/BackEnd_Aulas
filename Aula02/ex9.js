// Armazenando informações digitadas pelo usuário

let readline = require('readline'); // Biblioteca que permite armazenar informações digítadas

// Cria uma interface de leitura

const rl = readline.createInterface({
    input:process.stdin, // process.stdin gerencia processo de entrada do node
    output:process.stdout // process.stdout gerencia processo de saída do node
});

// Pergunta ao usuário
rl.question('Digite algo: ', (answer) =>{
    // Resposta do usuário
    console.log(`Você digitou ${answer}`);
    rl.close(); // Fecha a caixa de pergunta
})