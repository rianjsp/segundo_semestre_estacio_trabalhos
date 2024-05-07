// Importações
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

// Definição do componente
export default function LivroDados() { 
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    
    const navigate = useNavigate();

    
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value)); 
    };

    const incluir = (event) => {
        event.preventDefault();

        
        const novoLivro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'), 
            codEditora: codEditora
        };

        
        controleLivro.incluirLivro(novoLivro);

        navigate('/');
    };

    return (
        <main>
            <h2>Dados do livro</h2>
            <form onSubmit={incluir}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" id="titulo" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="resumo">Resumo</label>
                    <textarea id="resumo" maxLength={400} className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="editora">Editora</label>
                    <select id="editora" className="form-control" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="autores">Autores (1 por linha)</label>
                    <textarea id="autores" className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                
                <button type="submit" className="btn btn-primary mt-2">Salvar dados</button>
            </form>
        </main>
    );
}
