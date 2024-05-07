import { ControleEditoras } from "../../../classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from 'next';

const controleEditoras = new ControleEditoras();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras =  controleEditoras.getEditoras();

            res.status(200).json(editoras);
        } else {
            res.status(405).json({ error: 'método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ error: 'exceção ocorrida no servidor' });
    }
};
