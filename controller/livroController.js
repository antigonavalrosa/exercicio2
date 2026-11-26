const livroModel = require('../model/livroModel');

async function listar(req, res) {
    try {
        const livros = await livroModel.listarTodos();
        res.status(200).json(livros);
    } catch (erro) {
        console.error('Erro ao listar livros:', erro.message);
        res.status(500).json({ mensagem: 'Erro ao consultar o banco de dados' });
    }
}

async function buscar(req, res) {
    try {
        const id = req.params.id;
        const livro = await livroModel.buscarPorId(id);
        if (!livro) {
            return res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
        res.status(200).json(livro);
    } catch (erro) {
        console.error('Erro ao buscar livro:', erro.message);
        res.status(500).json({ mensagem: 'Erro ao consultar o banco de dados' });
    }
}

async function cadastrar(req, res) {
    try {
        const { titulo, autor, ano_publicacao, quantidade, data_cadastro } = req.body;

        const faltando = [];
        if (!titulo) faltando.push('titulo');
        if (!autor) faltando.push('autor');
        if (!ano_publicacao) faltando.push('ano_publicacao');
        if (!data_cadastro) faltando.push('data_cadastro');

        if (faltando.length > 0) {
            return res.status(400).json({ mensagem: 'Campos obrigatórios não enviados: ' + faltando.join(', ') });
        }

        const livro = {
            titulo,
            autor,
            ano_publicacao,
            quantidade: quantidade || 1,
            data_cadastro
        };

        const id = await livroModel.cadastrar(livro);
        res.status(201).json({ mensagem: 'Livro cadastrado com sucesso', id: id });
    } catch (erro) {
        console.error('Erro ao cadastrar livro:', erro.message);
        res.status(500).json({ mensagem: 'Erro ao consultar o banco de dados' });
    }
}

module.exports = { listar, buscar, cadastrar };
