import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HeaderComponent } from './header/header.component';
import { ServicoComponent } from './servico/servico.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    EmpresaComponent,
    HeaderComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyDkiQXVxxyGqNtnuMVSKSo0TOzd75l1s1E'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
