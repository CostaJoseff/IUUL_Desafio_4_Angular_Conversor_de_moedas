import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AreaDeConversaoComponent } from './components/area-de-conversao/area-de-conversao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AreaDeConversaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
