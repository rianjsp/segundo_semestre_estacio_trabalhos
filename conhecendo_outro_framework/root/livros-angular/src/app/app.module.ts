import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { ControleEditoraService } from './controle-editora.service'; // Importe o serviço ControleEditoraService
import { ControleLivrosService } from './controle-livros.service'; // Importe o serviço ControleLivrosService

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ControleEditoraService, ControleLivrosService], // Adicione os serviços como provedores
  bootstrap: [AppComponent]
})
export class AppModule { }
