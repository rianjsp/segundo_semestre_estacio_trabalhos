import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluido' });
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(`exceção ocorrida no servidor`);
  }
};
