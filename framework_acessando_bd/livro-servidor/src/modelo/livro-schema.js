const banco = require('./conexao');
const Schema = banco.Schema;

const LivroSchema = new Schema = { 
    _id: { type: Number, required: True },
    titulo: { type: String, required: True },
    codEditora: { type: String, required: True },
    resumo: { type: String, required: True },
    autores: { type: String, required: True }

}

const Livro = banco.models('Livro', LivroSchema, 'livros')

module.export = Livro;