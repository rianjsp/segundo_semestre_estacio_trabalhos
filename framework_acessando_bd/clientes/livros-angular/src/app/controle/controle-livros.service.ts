import { Injectable } from '@angular/core';
import { Livro } from '../livro';


// Service livros
@Injectable({
  providedIn: "root",
})
export class ControleLivrosService {
  livros: Livro[];

  // Construtor dos livros com a mesma base das fotos no sway
  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "Use a Cabeça: Java",
        resumo:
          "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orienta a objetos (OO) e Java.",
        autores: ["Bert Bates", "Kathy Sierra"],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "Java, como Programar",
        resumo:
          "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        autores: ["Paul Deitel", "Harvey Deitel"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "Core Java for the Impatient",
        resumo:
          "Readers familiar with Horstmann's original, two-volume Core Java books who are looking for a comprehensive, but condensed guide to all of the new features and functions os Java SE 9 will learn how these new features impact the language and core libraries.",
        autores: ["Cay Horstmann"],
      },
    ];
  }


  // Funções
  obterLivros = (): Livro[] => {
    return this.livros;
  };


  // Função incluir com verificação se os campos titulo e autores estão preenchidos
  incluir = (livro: Livro): void => {
    if (!livro.titulo.trim() || livro.autores.length === 0) {
      throw new Error("Preencha os campos antes de incluir os livros.");
    }
    const novoCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo: novoCodigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}
