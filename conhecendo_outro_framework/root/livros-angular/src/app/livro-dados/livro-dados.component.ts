import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ControleEditoraService } from '../controle/controle-editora.service'
import { ControleLivrosService } from '../controle/controle-livros.service'
import { Editora } from '../editora'
import { Livro } from '../livro'



// Inicializando o Componente
@Component({
  selector: "app-livro-dados",
  templateUrl: "./livro-dados.component.html",
  styleUrls: ["./livro-dados.component.css"]
})
export class LivroDadosComponent implements OnInit {
  livro: Livro
  autoresForm: string = ""
  editoras: Array<Editora> = []

  // Construtor com injeção de dependencias, e Serviços de controle
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {

    // Instanciando o livro
    this.livro = new Livro(1, 1, "", '', [])
  }

  // Funções
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split("\n")
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl("/lista")
  }

  cancelar(): void {
    this.router.navigateByUrl("/lista")
  }
}
