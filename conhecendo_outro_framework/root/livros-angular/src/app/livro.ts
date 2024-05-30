export class Livro {

  // Declaração das variaveis
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string;

  // Construção
  constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }

}
