import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from '../../interface/button/MyButtonConfig';
import {MyTableConfig} from '../../interface/table/MyTableConfig';
import {AutoService} from '../../service/auto/auto.service';
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {Auto} from "../../entity/auto";
import {Prenotazione} from "../../entity/prenotazione";
import {UtenteService} from "../../service/utente/utente.service";
import {Router} from "@angular/router";
import {Utente} from "../../entity/utente";

@Component({
  selector: 'app-my-prenota-auto',
  templateUrl: './my-prenota-auto.component.html',
  styleUrls: ['./my-prenota-auto.component.css']
})
export class MyPrenotaAutoComponent implements OnInit {

  dataInizioPeriodo!: Date;
  dataFinePeriodo!: Date;
  autoDisponibili!: Auto[];
  cercaButton!: MyButtonConfig;
  tableConfig!: MyTableConfig;
  prenotazioneInCorso!: boolean;
  utente!: Utente;

  constructor(private autoService: AutoService, private utenteService: UtenteService, private prenotazioneService: PrenotazioneService, private router: Router) {
  }

  ngOnInit(): void {
    this.utente = JSON.parse(localStorage.getItem('utenteLoggato') as string);
    this.prenotazioneInCorsoUtente(this.utente.id);
    this.cercaButton = {
      text: 'Cerca',
      icon: 'search',
      customCssClass: 'btn btn-primary'
    }
    this.tableConfig = {
      headers: [
        {key: 'targa', label: 'Targa'},
        {key: 'produttore', label: 'Produttore'},
        {key: 'modello', label: 'Modello'},
        {key: 'annoImmatricolazione', label: 'Anno di immatricolazione'}
      ],
      order: {defaultColumn: 'Targa', orderType: ''},
      search: {columns: ['Targa', 'Modello', 'Produttore']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: [
        {customCssClass: 'btn btn-primary', icon: 'directions_car', text: 'Prenota', onTop: false}
      ]
    }
  }

  clickButton($event: any): void {


    let prenotazione = new Prenotazione();
    prenotazione.auto = $event.row as Auto;
    prenotazione.utente = this.utente;
    prenotazione.dataInizio = this.dataInizioPeriodo;
    prenotazione.dataFine = this.dataFinePeriodo;
    prenotazione.approvata = false;

    this.prenotazioneService.salvaAggiornaPrenotazione(prenotazione).subscribe();
    this.router.navigateByUrl("/profilo");
  }

  cerca(): void {
    this.autoService.cercaAutoDisponibiliNelPeriodo(this.dataInizioPeriodo, this.dataFinePeriodo).subscribe(autoDisponibili => this.autoDisponibili = autoDisponibili);
  }

  prenotazioneInCorsoUtente(id: number): void {
    this.prenotazioneService.getPrenotazioneInCorsoUtente(id).subscribe(value => this.prenotazioneInCorso = value);
  }
}
