import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../interface/table/MyTableConfig";
import {UtenteService} from '../service/utente.service';


@Component({
  selector: 'app-my-gestione-utenti',
  templateUrl: './my-gestione-utenti.component.html',
  styleUrls: ['./my-gestione-utenti.component.css']
})
export class MyGestioneUtentiComponent implements OnInit {

  data!: any[];
  tableConfig!: MyTableConfig;

  constructor() {
  }

  ngOnInit(): void {

    this.data = [
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'},
      {nome: 'aldo', cognome: 'limaj', username: 'iuyfgrdsu', email: 'pekd'},
      {nome: 'fabio', cognome: 'baroncini', username: 'liqxcv', email: 'aldsj'},
      {nome: 'marco', cognome: 'rulli', username: 'pnxhd', email: 'mcngh'},
      {nome: 'gianluca', cognome: 'breda', username: 'nnxbf', email: 'qwasdfgh'},
      {nome: 'luca', cognome: 'giagnoli', username: 'uhgv', email: 'vjdoe'}
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
      {customCssClass: 'btn btn-primary', text: 'modifica', icon: 'account_circle', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'elimina', icon: 'delete', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'aggiungi', icon: 'account_circle', onTop: true}
    ]

  }

  clickButton($event: any): void {
    if ($event.action === 'aggiungi') {
      window.location.href = "/aggiungi_utente";
    } else if ($event.action === 'modifica') {
      window.location.href = "/modifica_utente/" + $event.row.nome;
    } else if ($event.action === 'elimina') {
    }
  }

}
