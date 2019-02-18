import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ClarityModule, ClrAlert, ClrAlertModule, ClrIfOpen, ClrTooltipModule} from '@clr/angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AdicionarProdutoComponent } from './produto/adicionar-produto/adicionar-produto.component';
import { AlertAppComponent } from './alert-app/alert-app.component';
import {NgxCurrencyModule} from 'ngx-currency';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {JwtModule} from '@auth0/angular-jwt';
import {TokenInterceptor} from './interceptors/token-interceptor';
import { AdicionarCategoriaComponent } from './categoria/adicionar-categoria/adicionar-categoria.component';
registerLocaleData(ptBr);


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    PrincipalComponent,
    ProdutoComponent,
    CategoriaComponent,
    AdicionarProdutoComponent,
    AlertAppComponent,
    AdicionarCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://192.168.0.100:8000/*'],
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
