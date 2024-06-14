import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body;
      controleLivro.incluirLivro(novoLivro);
      res.status(200).json({ message: 'Livro adicionado' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(`exceção ocorrida no servidor`);
  }
};
