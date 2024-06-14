const { obterLivros, incluir, excluir} = require('../src/modelo/livro-dao')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => { 
    try {
        const livros = await obterLivros()
        res.status(200).json(livros)
    } catch (error) {
        return res.status(500).json({
            message: 'Ocorreu um erro ao buscar os livros',
            erro: error.message
        })
    }
})


router.post('/', async (req, res) => { 
    try {
        const novoLivro = req.body;
        const livroNovo = await incluir(novoLivro)
        res.status(201).json({
            mensagem: 'Sucesso', Livro: livroNovo.id
        })
    } catch (error) {
        res.status(500).json({
            message: 'Sucesso',
            erro: error.message
        })
    }
})

router.delete('/:codigo', async (req, res) => { 
    try {
        const codigo = req.params.codigo
        const LivroDeletado = await excluir(codigo)
        res.status(200).json({
            message: 'Sucesso',
            livro: LivroDeletado
        })
    } catch (error) {
        res.status(500).json({
            message: 'Falha na operção',
            erro: error.message
        })
    }
})

module.exports = router