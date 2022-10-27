import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyButtonComponent} from './generic-component/my-button/my-button.component';

import {MatIconModule} from '@angular/material/icon';
import {MyTableComponent} from './generic-component/my-table/my-table.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterSearchPipe} from './pipe/filter-search.pipe';
import {PaginationPipe} from './pipe/pagination.pipe';
import {OrderPipe} from './pipe/order.pipe';
import {MyHeaderComponent} from './my-component/my-header/my-header.component';
import {MyGestioneUtentiComponent} from './my-component/my-gestione-utenti/my-gestione-utenti.component';
import {MyGestioneAutoComponent} from './my-component/my-gestione-auto/my-gestione-auto.component';
import {MyPrenotaAutoComponent} from './my-component/my-prenota-auto/my-prenota-auto.component';
import {MyHomeComponent} from './my-component/my-home/my-home.component';
import {MyLoginComponent} from './my-component/my-login/my-login.component';
import {MyProfiloComponent} from './my-component/my-profilo/my-profilo.component';
import {MySalvaCreaUtenteComponent} from './my-component/my-salva-crea-utente/my-salva-crea-utente.component';
import {MySalvaCreaAutoComponent} from './my-component/my-salva-crea-auto/my-salva-crea-auto.component';
import {MyGestionePrenotazioniComponent} from './my-component/my-gestione-prenotazioni/my-gestione-prenotazioni.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {CdkTableModule} from "@angular/cdk/table";


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    FilterSearchPipe,
    PaginationPipe,
    OrderPipe,
    MyHeaderComponent,
    MyGestioneUtentiComponent,
    MyGestioneAutoComponent,
    MyPrenotaAutoComponent,
    MyHomeComponent,
    MyLoginComponent,
    MyProfiloComponent,
    MySalvaCreaUtenteComponent,
    MySalvaCreaAutoComponent,
    MyGestionePrenotazioniComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule.forRoot([
      {path: '', component: MyLoginComponent},
      {path: 'login', component: MyLoginComponent},
      {path: 'gestione_utenti', component: MyGestioneUtentiComponent},
      {path: 'modifica_credenziali', component: MySalvaCreaUtenteComponent},
      {path: 'aggiungi_utente', component: MySalvaCreaUtenteComponent},
      {path: 'home', component: MyHomeComponent},
      {path: 'approva_prenotazioni', component: MyGestionePrenotazioniComponent},
      {path: 'cancella_prenotazioni', component: MyGestionePrenotazioniComponent},
      {path: 'gestione_auto', component: MyGestioneAutoComponent},
      {path: 'modifica_auto/:autoId', component: MySalvaCreaAutoComponent},
      {path: 'aggiungi_auto', component: MySalvaCreaAutoComponent},
      {path: 'profilo', component: MyProfiloComponent},
      {path: 'prenota_auto', component: MyPrenotaAutoComponent}
    ]),
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
