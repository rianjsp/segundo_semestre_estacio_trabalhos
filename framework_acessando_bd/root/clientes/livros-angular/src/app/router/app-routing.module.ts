import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroListaComponent } from '../livro-lista/livro-lista.component';
import { LivroDadosComponent } from '../livro-dados/livro-dados.component';


// Definição das rotas
const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },  // Quando o caminho tiver vazio, ele direciona para '/lista'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
