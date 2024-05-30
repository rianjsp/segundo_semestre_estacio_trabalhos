import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Array<Livro> = [
    {
      codigo: 11,
      codEditora: 1,
      titulo: 'Flores que nao sao rosas',
      resumo: 'lorem Ips',
      autores: ['Autor 1', 'Autor 2', 'Autor 3']
    },
    {
      codigo: 22,
      codEditora: 2,
      titulo: 'Flores que nao sao Azuis',
      resumo: 'lorem Ips',
      autores: ['Autor 4', 'Autor 5', 'Autor 6']
    },
    {
      codigo: 33,
      codEditora: 3,
      titulo: 'Flores que nao sao Flores',
      resumo: 'lorem Ips',
      autores: ['Autor 7', 'Autor 8', 'Autor 9']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    if (this.livros.length > 0) {
      novoLivro.codigo = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
    } else {
      novoLivro.codigo = 1;
    }
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
