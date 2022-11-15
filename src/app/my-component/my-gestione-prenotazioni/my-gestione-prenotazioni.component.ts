import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyTableConfig} from '../../interface/table/MyTableConfig';
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {Prenotazione} from "../../entity/prenotazione";
import {Utente} from "../../entity/utente";
import {get} from "lodash";
import * as moment from "moment/moment";


@Component({
  selector: 'app-my-gestione-prenotazioni',
  templateUrl: './my-gestione-prenotazioni.component.html',
  styleUrls: ['./my-gestione-prenotazioni.component.css']
})
export class MyGestionePrenotazioniComponent implements OnInit {

  listaPrenotazioni!: Prenotazione[];
  tableConfig!: MyTableConfig;


  constructor(private route: ActivatedRoute,
              private prenotazioneService: PrenotazioneService) {
  }

  ngOnInit(): void {

    const route = this.route.toString();

    this.tableConfig = {
      headers: [
        {key: 'infoAuto', label: 'Auto'},
        {key: 'utente.username', label: 'Utente'},
        {key: 'dataInizioFormat', label: 'Data inizio'},
        {key: 'dataFineFormat', label: 'Data fine'}
      ],
      order: {defaultColumn: 'Data Inizio', orderType: ''},
      search: {columns: ['Auto', 'Utente']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: []
    };

    if (route.includes('approva')) {
      this.getListaPrenotazioniDaApprovare();
      this.tableConfig.actions = [
        {customCssClass: 'btn btn-primary', icon: 'assignment_turned_in', text: 'Approva', onTop: false}
      ]
    } else {
      this.getListaPrenotazioni();
      this.tableConfig.actions = [
        {customCssClass: 'btn btn-primary', icon: 'delete', text: 'Elimina', onTop: false}
      ]
    }

  }

  clickButton($event: any): void {
    switch ($event.action) {
      case 'Approva':
        this.prenotazioneService.approvaPrenotazione($event.row).subscribe();
        this.getListaPrenotazioniDaApprovare();
        break;
      case 'Elimina':
        this.prenotazioneService.cancellaPrenotazione($event.row).subscribe();
        this.getListaPrenotazioni();
        break;
      default:
    }
  }

  getListaPrenotazioni(): void {
    this.prenotazioneService.getListaPrenotazioni().subscribe(prenotazioni => {
      this.prenotazioneService.prenotazioniFormat(prenotazioni);
      this.listaPrenotazioni = prenotazioni
    });
  }

  getListaPrenotazioniDaApprovare(): void {
    this.prenotazioneService.getPrenotazioniDaApprovare().subscribe(prenotazioni => {
      this.prenotazioneService.prenotazioniFormat(prenotazioni);
      this.listaPrenotazioni = prenotazioni
    });
  }

}
