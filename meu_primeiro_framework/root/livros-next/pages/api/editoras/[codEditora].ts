import { controleEditora } from ".";
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = Number(req.query.codEditora);

            if (isNaN(codEditora)) {
                res.status(400).json({ error: 'O parâmetro codEditora deve ser um número válido' });
                return;
            }

            const nomeEditora = await controleEditora.getNomeEditora(codEditora);

            res.status(200).json({ nomeEditora });
        } else {
            res.status(405).json({ error: 'método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ error: 'exceção ocorrida no servidor' });
    }
};
