import React from 'react';
import { ControleEditoras } from '../classes/controle/ControleEditora';

const controleEditora = new ControleEditoras();

interface LinhaLivroProps {
  livro: Livro;
  excluir(): void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>{livro.ano}</td>
      <td>{livro.paginas}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};
