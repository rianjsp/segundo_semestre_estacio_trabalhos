import { Injectable } from '@angular/core';
import {Editora} from './editora'


@Injectable({
  providedIn: 'root'
})
  
export class ControleEditoraService {

  private editoras: Array<Editora> = [
    {codEditora : 1, nome : 'Editora A'},
    {codEditora : 2, nome : 'Editora B'},
    {codEditora : 3, nome : 'Editora C'}
  ];

  constructor() { }


  // Metodos na implementação
  getEditoras(): Array<Editora> { 
    return this.editoras
  };

  getNomeEditora(codEditora: number): string  {   
      const editora = this.editoras.filter(a => a.codEditora === codEditora);
      return editora.length > 0 ? editora[0].nome : 'Editora não encontrada'
  }
}
