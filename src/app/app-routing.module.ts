import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PrincipalComponent} from './principal/principal.component';
import {ProdutoComponent} from './produto/produto.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {LoginGuard} from './guards/login.guard';
import {PrintConfigComponent} from './print-config/print-config.component';
import {ConfiguracaoComponent} from './configuracao/configuracao.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: PrincipalComponent, /*canActivate: [LoginGuard], canActivateChild: [LoginGuard],*/ children: [
      {path: 'produtos', component: ProdutoComponent},
      {path: 'categorias', component: CategoriaComponent},
      {path: 'config', component: ConfiguracaoComponent, children: [
          {path: 'impressao', component: PrintConfigComponent},
        ]},
      ]
  },
  {path: 'config', component: PrintConfigComponent, children: [
      {path: '', component: ConfiguracaoComponent},
      {path: 'impressao', component: PrintConfigComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    onSameUrlNavigation: 'reload',
    }
  )],
  exports: [RouterModule]
})


export class AppRoutingModule { }
