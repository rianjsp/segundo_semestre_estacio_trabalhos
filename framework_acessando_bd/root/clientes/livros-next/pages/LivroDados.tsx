import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {Menu} from '../componentes/Menu';
import { useRouter } from 'next/router';
import styles from '../src/app/page.module.css';

interface Livro {
  titulo: string;
  resumo: string;
  autores: string;
  codEditora: number;
}

interface Editora {
  codEditora: number;
  nome: string;
}

const LivroDados: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';
  const [opcoes, setOpcoes] = useState<Array<{ value: number; text: string }>>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const [controleEditora, setControleEditora] = useState<Editora[]>([]);
  const router = useRouter();

  const getEditoras = async () => {
    const resposta = await fetch('http://localhost:3000/api/editoras');
    const dados = await resposta.json();
    setControleEditora(dados);
  };

  useEffect(() => {
    getEditoras();
  }, []);

  const incluirLivro = async (livro: Livro) => {
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    return resposta.ok;
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      titulo,
      resumo,
      autores,
      codEditora,
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      router.push('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Adicionar Livro</title>
      </Head>
      <Menu />
      <main>
        <h1>Adicionar Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label>Título:</label>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div>
            <label>Resumo:</label>
            <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>
          <div>
            <label>Autores:</label>
            <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <div>
            <label>Editora:</label>
            <select value={codEditora} onChange={tratarCombo}>
              {controleEditora.map((editora) => (
                <option key={editora.codEditora} value={editora.codEditora}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
