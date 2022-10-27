import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from '../../interface/button/MyButtonConfig';
import {MyTableConfig} from '../../interface/table/MyTableConfig';
import {AutoService} from '../../service/auto/auto.service';
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {Auto} from "../../interface/entity/auto";
import {Prenotazione} from "../../interface/entity/prenotazione";
import {UtenteService} from "../../service/utente/utente.service";
import {Router} from "@angular/router";

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

  constructor(private autoService: AutoService, private utenteService: UtenteService, private prenotazioneService: PrenotazioneService, private router: Router) {
  }

  ngOnInit(): void {
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

    let prenotazione = {
      auto: $event.row,
      dataFine: this.dataFinePeriodo,
      dataInizio: this.dataInizioPeriodo,
      utente: this.utenteService.getUtenteByUsername(sessionStorage.getItem('utenteLoggato')),
      approvata: false
    };

    this.prenotazioneService.creaPrenotazione(prenotazione);
    this.router.navigateByUrl("/profilo");
  }

  cerca(): void {
    this.autoDisponibili = this.autoService.cercaAutoDisponibiliNelPeriodo(this.dataInizioPeriodo, this.dataFinePeriodo);
  }
}
