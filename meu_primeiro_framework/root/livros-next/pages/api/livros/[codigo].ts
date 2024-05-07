import { controleLivro } from '.';

import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const codigoLivro = req.query.codigo;

        controleLivro.excluir(codigoLivro);

        res.status(200).json({ message: 'Livro excluído' });
    } else {
        res.status(405).json({ error: 'método não permitido' });
    }
};
