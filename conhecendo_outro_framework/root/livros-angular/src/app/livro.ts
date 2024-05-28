export class Livro {

    // Declaração dos campos
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    //
    constructor(codigo:number, codEditora:number, titulo:string, resumo:string, autores:string[]) { 
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}
