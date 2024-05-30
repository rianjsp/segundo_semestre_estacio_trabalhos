import { Injectable } from '@angular/core';
import { Editora } from './editora'


@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    {codEditora:1, nome:'Raios de Sol'},
    {codEditora:2, nome:'Raios Lua'},
    {codEditora:3, nome:'Emaranhado de estrelas'}
  ]

  constructor() { }

  getNomeEditora(codEditora: number): string {
    const editorasEncontradas = this.editoras.filter(editora => editora.codEditora === codEditora)
    if (editorasEncontradas.length > 0) {
      return editorasEncontradas[0].nome;
    } else {
      return 'Editora não encontrada'
    }
  }

  getEditoras(): Editora[] {
    return this.editoras;
   }
}
