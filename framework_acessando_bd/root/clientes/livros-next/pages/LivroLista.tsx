import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';
import ControleLivros from '../classes/controle/ControleLivros';

interface Livro {
  codigo: string;
  titulo: string;
  autor: string;
  ano: number;
}

const LivroLista: React.FC = () => {
  const controleLivros = new ControleLivros();
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: string) => {
    controleLivros.excluirLivro(codigo).then((sucesso) => {
      if (sucesso) {
        setCarregado(false);
      }
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
      <main>
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <tr key={index}>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.ano}</td>
                <td>
                  <button onClick={() => excluir(livro.codigo)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
