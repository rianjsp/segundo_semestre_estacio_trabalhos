import { Injectable } from '@angular/core';
import { Livro} from './livro'

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Array<Livro> = [
    {
      codigo: 11,
      codEditora: 1,
      titulo: 'Livro 1',
      resumo: 'Lorem Ipsum',
      autores: 'Autor 1'
    },
    {
      codigo: 22,
      codEditora: 2,
      titulo: 'Livro 2',
      resumo: 'Lorem Ipsum',
      autores: 'Autor 2'
    },
    {
      codigo: 33,
      codEditora: 3,
      titulo: 'Livro 3',
      resumo: 'Lorem Ipsum',
      autores: 'Autor 3'
    }
  ];

  constructor() { }

  obterLivros() {
    return this.livros
  };

  incluir(novoLivro: Livro) {
    const maiorCodigo = Math.max(...this.livros.map(livro => livro.codigo))
    novoLivro.codigo = maiorCodigo + 1
    this.livros.push(novoLivro)
  };

  excluir(codigo: number) {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  };
}
