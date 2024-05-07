import { ControleLivro } from "../../../classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from 'next';

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        // Tratar requisições GET
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        // Tratar requisições POST
        handlePostRequest(req, res);
    } else {
        // Responder com status 405 para métodos não permitidos
        res.status(405).json({ error: 'Método não permitido' });
    }
};

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Obter o vetor de livros
        const livros = controleLivro.obterLivros();

        // Responder com status 200 e o vetor de livros em formato JSON
        res.status(200).json(livros);
    } catch (error) {
        // Responder com status 500 para exceções ocorridas no servidor
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Capturar os dados do livro fornecidos no corpo da requisição
        const novoLivro = req.body;

        // Incluir o novo livro no controle de livros
        controleLivro.incluirLivro(novoLivro);

        // Responder com status 200 e uma mensagem de sucesso em formato JSON
        res.status(200).json({ message: 'Livro incluído com sucesso' });
    } catch (error) {
        // Responder com status 500 para exceções ocorridas no servidor
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
