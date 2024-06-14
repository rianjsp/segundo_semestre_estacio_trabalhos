const Livro = require('./livro-schema')

const obterLivros = async () => {
    try {
        const livros = await Livro.find()
        console.log(livros)
        return livros
    } catch (error) {
        console.log('Ocorreu um erro ao buscar livros: ', error.message)
    }
};

const incluir = async (livro) => {
    try {
        const LivroAdicionado = await Livro.create(livro)
        console.log(LivroAdicionado)
        return LivroAdicionado
    } catch (error) {
        console.log('Ocorreu um erro ao adicionar o livro: ', error.message)
    }
};

const excluir = async (codigo) => {
    try {
        const LivroDeletado = await Livro.deleteOne({_id: codigo})
        console.log(LivroDeletado)
        return LivroDeletado
    } catch (error) {
        console.log('Ocorreu um erro ao excluir o livro: ', error.message)
    }
};

module.exports = { obterLivros, incluir, excluir }