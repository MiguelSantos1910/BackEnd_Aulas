// Cria variável para armazenar o express

const express = require('express');

// Cria uma instância do express

const app = express();

// Define a porta que vai rodar a api

const porta = 3000;

// Lista os dados para armazenar os dados cadastrados

// Middleware para processar a resposta no formato json

app.use(express.json);

// Cria a rota na raiz da api

app.get('/', (req, res) =>{
    res.send('Api funcionando');
});

// Inicia o servidor e a porta

app.listen(porta, () =>{
    console.log(`Executando a Api na porta ${porta}`);
});