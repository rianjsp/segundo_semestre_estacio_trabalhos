import { Livro } from "../modelo/Livro";

var livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: 'Os Sem pernas',
        resumo: 'lorem ipsum dolor sit amet',
        autores: ['Bryan','Richard','John']
    }, { 
        codigo: 2,
        codEditora: 2,
        titulo: 'Os Mil Cabeças',
        resumo: 'lorem ipsum dolor sit amet',
        autores: ['Ryan','Ricardo','Ana']
    }, { 
        codigo: 3,
        codEditora: 3,
        titulo: 'Os Vagabundos e a dama dourada',
        resumo: 'lorem ipsum dolor sit amet',
        autores: ['Caike','Marcio','Haylander']
     }
];

export class ControleLivro {
    obterLivros(): Array<Livro> { 
        return livros;
    }

    incluirLivro(novoLivro: Livro): void { 
        const novoCodigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluirLivros(codLivro: number): void { 
        const index = livros.findIndex(livro => livro.codigo === codLivro);
        if (index !== -1) { 
            livros.splice(index, 1)
        }
    }
}

