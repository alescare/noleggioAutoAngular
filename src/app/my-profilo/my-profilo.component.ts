import { Component, OnInit } from '@angular/core';
import {MyTableConfig} from "../interface/table/MyTableConfig";
import { PrenotazioneService } from '../service/prenotazione.service';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-my-profilo',
  templateUrl: './my-profilo.component.html',
  styleUrls: ['./my-profilo.component.css']
})
export class MyProfiloComponent implements OnInit {


  tableConfig!: MyTableConfig;
  prenotazioni!: any[];


  constructor(private prenotazioneService: PrenotazioneService, private utenteService: UtenteService) { }

  ngOnInit(): void {
  }

}
