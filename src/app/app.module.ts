import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AreaDeConversaoComponent } from './components/area-de-conversao/area-de-conversao.component';
import { HistoricoComponent } from './components/historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AreaDeConversaoComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
