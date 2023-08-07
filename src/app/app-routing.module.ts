import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { AreaDeConversaoComponent } from './components/area-de-conversao/area-de-conversao.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ListagemDeMoedasComponent } from './components/listagem-de-moedas/listagem-de-moedas.component'

const routes: Routes = [
  {path: "", component: PaginaInicialComponent},
  {path: "converter", component: AreaDeConversaoComponent},
  {path: "historico", component: HistoricoComponent},
  {path: "moedas", component: ListagemDeMoedasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
