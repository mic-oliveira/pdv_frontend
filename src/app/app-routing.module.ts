import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PrincipalComponent} from './principal/principal.component';
import {ProdutoComponent} from './produto/produto.component';
import {CategoriaComponent} from './categoria/categoria.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: PrincipalComponent, children: [
      {path: 'produtos', component: ProdutoComponent},
      {path: 'categorias', component: CategoriaComponent},
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
