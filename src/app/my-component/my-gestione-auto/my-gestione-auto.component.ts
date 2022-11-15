import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from '../../interface/table/MyTableConfig';
import {AutoService} from '../../service/auto/auto.service';
import {Auto} from "../../entity/auto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-gestione-auto',
  templateUrl: './my-gestione-auto.component.html',
  styleUrls: ['./my-gestione-auto.component.css']
})
export class MyGestioneAutoComponent implements OnInit {

  listaAuto!: Auto[];
  tableConfig!: MyTableConfig;

  constructor(private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    this.getListaAuto();
    this.tableConfig = {
      headers: [
        {key: 'targa', label: 'Targa'},
        {key: 'costruttore', label: 'Produttore'},
        {key: 'modello', label: 'Modello'},
        {key: 'annoImmatricolazione', label: 'Anno di immatricolazione'}
      ],
      order: {defaultColumn: 'Targa', orderType: ''},
      search: {columns: ['Targa', 'Modello', 'Produttore']},
      pagination: {itemPerPage: 5, itemPerPageOptions: [5, 10, 15, 20, 50, 100]},
      actions: [
        {customCssClass: 'btn btn-primary', icon: ' directions_car', text: 'Aggiungi', onTop: true},
        {customCssClass: 'btn btn-primary', icon: 'account_circle', text: 'Modifica', onTop: false},
        {customCssClass: 'btn btn-primary', icon: 'delete', text: 'Elimina', onTop: false}
      ]
    }
  }

  getListaAuto(): void {
    this.autoService.getListaAuto().subscribe(listaAuto => this.listaAuto = listaAuto);
  }

  clickButton($event: any): void {
    switch ($event.action) {
      case 'Aggiungi':
        this.router.navigateByUrl("/aggiungi_auto");
        break;
      case 'Modifica':
        this.router.navigateByUrl("/modifica_auto/" + $event.row.id);
        break;
      case 'Elimina':
        this.autoService.eliminaAuto($event.row).subscribe();
        this.getListaAuto();
        break;
      default:
    }
  }


}
