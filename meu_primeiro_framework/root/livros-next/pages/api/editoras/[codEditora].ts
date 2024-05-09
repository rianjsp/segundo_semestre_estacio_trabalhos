import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      const editoraNome = controleEditora.getNomeEditora(Number(codEditora));
      if (editoraNome) {
        res.status(200).json({ nome: editoraNome });
      } else {
        res.status(404).json({ error: 'Editora não encontrada' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`método ${req.method} não permitido`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(`exceção ocorrida no
servidor`);
  }
};
