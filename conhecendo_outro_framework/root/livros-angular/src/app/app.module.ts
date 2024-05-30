import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Certifique-se de importar o componente LivroListaComponent

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent // Certifique-se de declarar o componente LivroListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
