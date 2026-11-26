CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

CREATE TABLE livro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano_publicacao INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    data_cadastro DATE NOT NULL
);

INSERT INTO livro (titulo, autor, ano_publicacao, quantidade, data_cadastro) VALUES
('Dom Casmurro', 'Machado de Assis', 1899, 4, '2026-11-02'),
('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 1881, 2, '2026-11-02'),
('O Cortiço', 'Aluísio Azevedo', 1890, 3, '2026-11-09'),
('Capitães da Areia', 'Jorge Amado', 1937, 5, '2026-11-16'),
('A Hora da Estrela', 'Clarice Lispector', 1977, 2, '2026-11-20');

SELECT * FROM livro;
