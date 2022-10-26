import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "./interface/table/MyTableConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*title!: string;
  myTableConfig!: MyTableConfig;
  data!: any[];
  form!: MyFormConfig;*/
  utenteLogin!: any;

  ngOnInit(): void {

    /*this.title = 'Form di prova';
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

    this.myTableConfig = {
      headers: [
        {key: 'nome', label: 'Nome'},
        {key: 'cognome', label: 'Cognome'},
        {key: 'username', label: 'Username'},
        {key: 'email', label: 'Email'},
        {key: 'modifica', label: ''},
        {key: 'elimina', label: ''},
      ],
      actions: [],
      order: {defaultColumn: '', orderType: ''},
      search: {columns: ['', 'Nome', 'Cognome', 'Username', 'Email']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 30, 40]}

    }
    this.myTableConfig.actions = [
      {customCssClass: 'btn btn-primary', text: 'modifica', icon: 'account_circle', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'elimina', icon: 'delete', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'aggiungi', icon: 'account_circle', onTop: true}
    ]

    this.form= {
      elements: [
        {label: 'Nome', type: 'text'},
        {label: 'Cognome', type: 'text'},
        {label: 'Username', type: 'text'},
        {label: 'Password', type: 'password'},
        {label: 'Data di nascita', type: 'date'}
        ],
      buttons:[
        {text: 'Salva', icon: 'account_circle', customCssClass: 'btn btn-primary'},
        {text: 'Elimina', icon: 'delete', customCssClass: 'btn btn-primary'},
        {text: 'Annulla', icon: 'cancel', customCssClass: 'btn btn-primary'}
      ]
    }*/

  }


  manageClickButton($event: any) {
    console.log($event);
  }
}
