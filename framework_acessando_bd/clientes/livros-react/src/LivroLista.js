import React, { useState, useEffect } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        controleLivro.obterLivros().then((livros) => {
            setLivros(livros);
            setCarregado(true);
        });
    }, [carregado]);

    const excluir = (codigoLivro) => {
        controleLivro.excluirLivro(codigoLivro).then(() => {
            setCarregado(false);
        });
    };

    return (
        <main>
            <h1 className="text-dark p-0 m-0 border-bottom">Catálogo de Livros</h1>
            <table className="table p-0 m-0">
                <thead className="bg-dark text-light p-0 m-0">
                    <tr>
                        <th className="bg-dark text-light">Excluir</th>
                        <th className="bg-dark text-light">Código</th>
                        <th className="bg-dark text-light">Título</th>
                        <th className="bg-dark text-light">Resumo</th>
                        <th className="bg-dark text-light">Autores</th>
                        <th className="bg-dark text-light">Editora</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro
                            key={index}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
}

function LinhaLivro({ livro, excluir }) {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    <strong>{livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}</strong>
                </ul>
            </td>
            <td>{nomeEditora}</td>
        </tr>
    );
}
