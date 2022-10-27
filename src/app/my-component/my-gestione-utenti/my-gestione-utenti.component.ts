import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../../interface/table/MyTableConfig";
import {UtenteService} from '../../service/utente/utente.service';
import {Utente} from "../../interface/entity/utente";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-gestione-utenti',
  templateUrl: './my-gestione-utenti.component.html',
  styleUrls: ['./my-gestione-utenti.component.css']
})
export class MyGestioneUtentiComponent implements OnInit {

  listaUtenti!: Utente[];
  tableConfig!: MyTableConfig;

  constructor(private utenteService: UtenteService, private router: Router) {
  }

  ngOnInit(): void {

    this.listaUtenti = [
      {id: 1, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 2, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 3, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 4, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 5, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 11, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 12, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 13, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 14, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 15, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 21, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 22, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 23, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 24, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 25, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 31, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 32, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 33, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 34, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 35, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 41, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 42, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 43, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 44, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 45, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 51, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 52, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 53, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 54, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 55, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 61, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 62, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 63, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 64, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 65, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 71, nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 72, nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 73, nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 74, nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},
      {id: 75, nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe', prenotazioni: [], admin: false, password: '', dataNascita: new Date()},



    ];
    this.tableConfig = {
      headers: [
        {key: 'nome', label: 'Nome'},
        {key: 'cognome', label: 'Cognome'},
        {key: 'username', label: 'Username'},
        {key: 'email', label: 'Email'},
        {key: 'modifica', label: ''},
        {key: 'elimina', label: ''},
      ],
      actions: [],
      order: {defaultColumn: '', orderType: 'ASC'},
      search: {columns: ['', 'Nome', 'Cognome', 'Username', 'Email']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 30, 40]}

    }
    this.tableConfig.actions = [
      {customCssClass: 'btn btn-primary', text: 'Modifica', icon: 'account_circle', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'Elimina', icon: 'delete', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'Aggiungi', icon: 'account_circle', onTop: true}
    ]

  }

  clickButton($event: any): void {
    switch ($event.action) {
      case 'Aggiungi':
        this.router.navigateByUrl("/aggiungi_utente");
        break;
      case 'Modifica':
        this.router.navigateByUrl("/modifica_utente/" + $event.row.id);
        break;
      case 'Elimina':
        this.utenteService.eliminaUtente($event.row);
        break;
      default:
        ;
    }
  }

}
