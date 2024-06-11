import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

interface Livro {
  codigo: number;
  titulo: string;
  autor: string;
  ano: number;
}

const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  const obter = async () => {
    const resposta = await fetch(baseURL);
    const dados = await resposta.json();
    return dados;
  };

  const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return resposta.ok;
  };

  useEffect(() => {
    if (!carregado) {
      obter().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
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
            {livros.map((livro) => (
              <tr key={livro.codigo}>
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
