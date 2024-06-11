const banco = require('./conexao');
const Schema = banco.Schema;

const LivroSchema = new Schema({ 
    _id: { type: Number, required: true },
    titulo: { type: String, required: true },
    codEditora: { type: String, required: true },
    resumo: { type: String, required: true },
    autores: [{ type: String, required: true }]
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
