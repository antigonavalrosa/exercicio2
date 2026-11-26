const express = require('express');
const livroController = require('../controller/livroController');

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get('/livros', livroController.listar);
app.get('/livros/:id', livroController.buscar);
app.post('/livros', livroController.cadastrar);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
