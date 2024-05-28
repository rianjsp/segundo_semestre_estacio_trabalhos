import { Injectable } from '@angular/core';
import { Livro } from './livro'


@Injectable({
  providedIn: 'root'
})
  
export class ControleLivrosService {

  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Mar de JavaScript e uma jangada de Python',
      resumo: 'Descepções de um jovem com a ti',
      autores: ['Alexander', 'Rian', 'Juan']
    },
    {
      codigo: 10,
      codEditora: 2,
      titulo: 'Rosas Perfumadas que não cheiram',
      resumo: 'Gravidade, agrava a idade!',
      autores: ['Rexona', 'Mehlor', 'Rolom']
    },
    {
      codigo: 100,
      codEditora: 3,
      titulo: 'Asas de um menino flutuante',
      resumo: 'Era uma vez um trem quem andava na agua',
      autores: ['Junior', 'Donwley', 'Robert']
    }
  ];

  constructor() { }

  // Metodos de implementação
  obterLivros(): Array<Livro> { 
    return this.livros
  };

  incluir(novoLivro: Livro): void { 
    const maiorCodigo = this.livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0);
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  };

  excluir(codigo: number): void { 
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice >= 0) { 
      this.livros.splice(indice, 1);
    }
  };
}
