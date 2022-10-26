import { Component, OnInit } from '@angular/core';
import { MyButtonConfig } from '../interface/button/MyButtonConfig';
import { MyTableConfig } from '../interface/table/MyTableConfig';
import { AutoService } from '../service/auto.service';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-my-prenota-auto',
  templateUrl: './my-prenota-auto.component.html',
  styleUrls: ['./my-prenota-auto.component.css']
})
export class MyPrenotaAutoComponent implements OnInit {

  dataInizioPeriodo!: Date;
  dataFinePeriodo!: Date;
  autoDisponibili!: any[];
  cercaButton!: MyButtonConfig;
  tableConfig!: MyTableConfig;

  constructor(private autoService: AutoService, private prenotazioneService: PrenotazioneService) { }

  ngOnInit(): void {
  }

  clickButton($event: any): void {
    if ($event.action === 'cerca') {
      //service per auto disponibili
    } else if ($event.action === 'prenota') {
      //service per creare prenotazione
    }
  }

}
