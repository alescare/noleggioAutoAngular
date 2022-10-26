import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyTableConfig} from '../interface/table/MyTableConfig';
import {PrenotazioneService} from '../service/prenotazione.service';


@Component({
  selector: 'app-my-gestione-prenotazioni',
  templateUrl: './my-gestione-prenotazioni.component.html',
  styleUrls: ['./my-gestione-prenotazioni.component.css']
})
export class MyGestionePrenotazioniComponent implements OnInit {

  prenotazioni!: any[];
  tableConfig!: MyTableConfig;


  constructor(private route: ActivatedRoute,
              private prenotazioneService: PrenotazioneService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const azioneFromRoute = routeParams.get('azione');
    if (azioneFromRoute == 'elimina') {
      //
    } else if (azioneFromRoute == 'approva') {
      //
    }
  }

  clickButton($event: any): void {
    if ($event.action === 'approva') {
      //service per approvare la prenotazione
    } else if ($event.action === 'elimina') {
      //service per eliminare la prenotazione
    }
  }

}
