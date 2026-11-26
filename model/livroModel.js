const conexao = require('./conexao');

async function listarTodos() {
    const sql = 'SELECT id, titulo, autor, ano_publicacao, quantidade, data_cadastro FROM livro ORDER BY titulo';
    const [linhas] = await conexao.query(sql);
    return linhas;
}

async function buscarPorId(id) {
    const sql = 'SELECT id, titulo, autor, ano_publicacao, quantidade, data_cadastro FROM livro WHERE id = ?';
    const [linhas] = await conexao.query(sql, [id]);
    return linhas[0];
}

async function cadastrar(livro) {
    const sql = 'INSERT INTO livro (titulo, autor, ano_publicacao, quantidade, data_cadastro) VALUES (?, ?, ?, ?, ?)';
    const [resultado] = await conexao.query(sql, [
        livro.titulo,
        livro.autor,
        livro.ano_publicacao,
        livro.quantidade,
        livro.data_cadastro
    ]);
    return resultado.insertId;
}

module.exports = { listarTodos, buscarPorId, cadastrar };
