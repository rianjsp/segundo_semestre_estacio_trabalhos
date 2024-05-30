import { Injectable } from '@angular/core';
import { Editora} from './editora'


@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora 1'},
    { codEditora: 2, nome: 'Editora 2'},
    { codEditora: 3, nome: 'Editora 3'}
  ];

  constructor() { }

  getNomeEditora(codEditora: number) {
    const editoraEncontrada = this.editoras.filter(editoras => editoras.codEditora === codEditora);
    if (codEditora >= 0) {
      return editoraEncontrada[0].nome
    } else {
      return 'Nome da editora não encontrada'
    }
  }


  getEditoras() {
    return this.editoras;
   }


}
