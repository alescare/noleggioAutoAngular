import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyButtonComponent} from './my-button/my-button.component';

import {MatIconModule} from '@angular/material/icon';
import {MyTableComponent} from './my-table/my-table.component';

import {FormsModule} from '@angular/forms';
import {FilterSearchPipe} from './pipe/filter-search.pipe';
import {PaginationPipe} from './pipe/pagination.pipe';
import {OrderPipe} from './pipe/order.pipe';
import {MyHeaderComponent} from './my-header/my-header.component';
import {MyGestioneUtentiComponent} from './my-gestione-utenti/my-gestione-utenti.component';
import {MyGestioneAutoComponent} from './my-gestione-auto/my-gestione-auto.component';
import {MyPrenotaAutoComponent} from './my-prenota-auto/my-prenota-auto.component';
import {MyHomeComponent} from './my-home/my-home.component';
import {MyLoginComponent} from './my-login/my-login.component';
import {MyProfiloComponent} from './my-profilo/my-profilo.component';
import {MySalvaCreaUtenteComponent} from './my-salva-crea-utente/my-salva-crea-utente.component';
import {MySalvaCreaAutoComponent} from './my-salva-crea-auto/my-salva-crea-auto.component';
import {MyGestionePrenotazioniComponent} from './my-gestione-prenotazioni/my-gestione-prenotazioni.component';
import {RouterModule, RouterOutlet} from "@angular/router";


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
    RouterOutlet,
    RouterModule.forRoot([
      {path: '', component: MyLoginComponent},
      {path: 'login', component: MyLoginComponent},
      {path: 'gestione_utenti', component: MyGestioneUtentiComponent},
      {path: 'modifica_utente/:utenteId', component: MySalvaCreaUtenteComponent},
      {path: 'aggiungi_utente', component: MySalvaCreaUtenteComponent},
      {path: 'prenota_auto', component: MyPrenotaAutoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
