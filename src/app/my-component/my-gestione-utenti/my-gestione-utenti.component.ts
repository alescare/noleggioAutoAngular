import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../../interface/table/MyTableConfig";
import {UtenteService} from '../../service/utente/utente.service';
import {Utente} from "../../entity/utente";
import {Router} from "@angular/router";
import * as moment from "moment";


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
    this.getListaUtenti();

    this.tableConfig = {
      headers: [
        {key: 'nome', label: 'Nome'},
        {key: 'cognome', label: 'Cognome'},
        {key: 'username', label: 'Username'},
        {key: 'email', label: 'Email'},
        {key: 'dataNascitaFormat', label: 'Data di nascita'}
      ],
      actions: [],
      order: {defaultColumn: '', orderType: 'ASC'},
      search: {columns: ['', 'Nome', 'Cognome', 'Username', 'Email']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 30, 40]}

    }
    this.tableConfig.actions = [
      {customCssClass: 'btn btn-primary', text: 'Elimina', icon: 'delete', onTop: false},
      {customCssClass: 'btn btn-primary', text: 'Aggiungi', icon: 'account_circle', onTop: true}
    ]

  }

  getListaUtenti(): void {
    this.utenteService.getListaUtenti().subscribe(utenti => {
      utenti.forEach(value => {
        value.dataNascitaFormat = moment(value.dataNascita, "YYYY-MM-DD").format("DD/MM/YYYY");
      })
      this.listaUtenti = utenti;
    });
  }

  clickButton($event: any): void {
    switch ($event.action) {
      case 'Aggiungi':
        this.router.navigateByUrl("/aggiungi_utente");
        break;
      case 'Elimina':
        this.utenteService.eliminaUtente($event.row).subscribe();
        this.getListaUtenti();
        break;
      default:
    }
  }
}
