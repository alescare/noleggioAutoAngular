import { Component, OnInit } from '@angular/core';
import {MyTableConfig} from '../interface/table/MyTableConfig';
import {AutoService} from '../service/auto.service';

@Component({
  selector: 'app-my-gestione-auto',
  templateUrl: './my-gestione-auto.component.html',
  styleUrls: ['./my-gestione-auto.component.css']
})
export class MyGestioneAutoComponent implements OnInit {

  data!: any[];
  tableConfig!: MyTableConfig;

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    //this.data = autoservice.getAutoList();
  }

  clickButton($event: any): void {
    if ($event.action === 'aggiungi') {
      window.location.href = "/aggiungi_auto";
    } else if ($event.action === 'modifica') {
      window.location.href = "/modifica_auto/" + $event.row.nome;
    } else if ($event.action === 'elimina') {
      //service per eliminare l'auto
    }
  }

}
