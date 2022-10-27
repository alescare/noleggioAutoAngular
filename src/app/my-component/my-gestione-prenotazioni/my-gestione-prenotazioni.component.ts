import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyTableConfig} from '../../interface/table/MyTableConfig';
import {PrenotazioneService} from '../../service/prenotazione/prenotazione.service';
import {Prenotazione} from "../../interface/entity/prenotazione";


@Component({
  selector: 'app-my-gestione-prenotazioni',
  templateUrl: './my-gestione-prenotazioni.component.html',
  styleUrls: ['./my-gestione-prenotazioni.component.css']
})
export class MyGestionePrenotazioniComponent implements OnInit {

  prenotazioni!: Prenotazione[];
  tableConfig!: MyTableConfig;


  constructor(private route: ActivatedRoute,
              private prenotazioneService: PrenotazioneService) {
  }

  ngOnInit(): void {
    const route = this.route.toString();

    this.tableConfig = {
      headers: [
        {key: 'auto', label: 'Auto'},
        {key: 'utente', label: 'Utente'},
        {key: 'dataInizio', label: 'Data inizio'},
        {key: 'dataFine', label: 'Data fine'}
      ],
      order: {defaultColumn: 'Data Inizio', orderType: ''},
      search: {columns: ['Auto', 'Utente']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: []
    };

    if (route.includes('approva')) {
      this.prenotazioneService.getPrenotazioniDaApprovare();
      this.tableConfig.actions = [
        {customCssClass: 'btn btn-primary', icon: 'assignment_turned_in', text: 'Approva', onTop: false}
      ]
    } else {
      this.prenotazioneService.getPrenotazioni();
      this.tableConfig.actions = [
        {customCssClass: 'btn btn-primary', icon: 'delete', text: 'Elimina', onTop: false}
      ]
    }
  }

  clickButton($event: any): void {
    switch ($event.action){
      case 'Approva':
        this.prenotazioneService.approvaPrenotazione($event.row);
        break;
      case 'Elimina':
        this.prenotazioneService.cancellaPrenotazione($event.row);
        break;
      default:
        ;
    }
  }

}
