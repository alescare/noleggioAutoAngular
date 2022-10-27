import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../../interface/table/MyTableConfig";
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {UtenteService} from '../../service/utente/utente.service';
import {Prenotazione} from "../../interface/entity/prenotazione";
import {Utente} from "../../interface/entity/utente";
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profilo',
  templateUrl: './my-profilo.component.html',
  styleUrls: ['./my-profilo.component.css']
})
export class MyProfiloComponent implements OnInit {


  tableConfig!: MyTableConfig;
  prenotazioni!: Prenotazione[];
  utente!: Utente;
  buttonConfig!: MyButtonConfig;


  constructor(private prenotazioneService: PrenotazioneService, private utenteService: UtenteService, private router: Router) { }

  ngOnInit(): void {
    this.utente = this.utenteService.getUtenteByUsername(sessionStorage.getItem('utenteLoggato'));
    this.buttonConfig = {
      text: 'Modifica',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: ''
    }
    this.tableConfig = {
      headers: [
        {key: 'auto', label: 'Auto'},
        {key: 'dataFine', label: 'Data fine'},
        {key: 'dataInizio', label: 'Data inizio'},
        {key: 'approvata', label: 'Stato'}
      ],
      order: {defaultColumn: 'Data Inizio', orderType: ''},
      search: {columns: ['Auto', 'Utente']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: []
    };
  }

  modificaCredenziali(): void {
    this.router.navigateByUrl("/modifica_credenziali");
  }
}
