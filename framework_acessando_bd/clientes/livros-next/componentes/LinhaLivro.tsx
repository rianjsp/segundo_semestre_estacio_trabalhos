import React from 'react';
import { Livro } from '../classes/modelo/Livro'; 

import { ControleEditoras } from '../classes/controle/ControleEditora';

const controleEditora = new ControleEditoras();

// Definindo a interface LinhaLivroProps
interface LinhaLivroProps {
  livro: Livro;
  excluir(): void;
}

// Definindo o componente LinhaLivro
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
        <button onClick={() => excluir()}>Excluir</button>
      </td>
    </tr>
  );
};
