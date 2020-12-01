import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'empresa',
        component: EmpresaComponent
      },
      {
        path: 'atuacao',
        component: ServicoComponent
      },
      {
        path: 'contato',
        component: ContatoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}