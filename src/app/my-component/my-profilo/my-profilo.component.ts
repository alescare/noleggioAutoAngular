import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../../interface/table/MyTableConfig";
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {UtenteService} from '../../service/utente/utente.service';
import {Prenotazione} from "../../entity/prenotazione";
import {Utente} from "../../entity/utente";
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {Router} from "@angular/router";
import {AuthService} from "../../service/jwt/auth.service";
import * as moment from "moment/moment";

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


  constructor(private prenotazioneService: PrenotazioneService, private utenteService: UtenteService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {

    this.getUser();
    this.getListaPrenotazioniUtente();
    this.buttonConfig = {
      text: 'Modifica',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: 'edit'
    }
    this.tableConfig = {
      headers: [
        {key: 'infoAuto', label: 'Auto'},
        {key: 'dataInizioFormat', label: 'Data inizio'},
        {key: 'dataFineFormat', label: 'Data fine'},
        {key: 'approvataFormat', label: 'Stato'}
      ],
      order: {defaultColumn: 'Data Inizio', orderType: ''},
      search: {columns: ['Auto', 'Utente']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: []
    };
  }

  getUser(): void {
    this.utente = JSON.parse(localStorage.getItem("utenteLoggato") as string);
    this.utente.dataNascitaFormat = moment(this.utente.dataNascita, "YYYY-MM-DD").format("DD/MM/YYYY");
  }

  modificaCredenziali(): void {
    this.router.navigateByUrl("/modifica_credenziali");
  }

  getListaPrenotazioniUtente(): void {
    this.prenotazioneService.getListaPrenotazioniUtente(this.utente.id).subscribe(prenotazioni => {
      this.prenotazioneService.prenotazioniFormat(prenotazioni);
      this.prenotazioni = prenotazioni
    });
  }

}
