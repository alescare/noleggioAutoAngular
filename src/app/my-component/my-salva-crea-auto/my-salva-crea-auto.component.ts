import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AutoService} from "../../service/auto/auto.service";
import {Auto} from "../../interface/entity/auto";

@Component({
  selector: 'app-my-salva-crea-auto',
  templateUrl: './my-salva-crea-auto.component.html',
  styleUrls: ['./my-salva-crea-auto.component.css']
})
export class MySalvaCreaAutoComponent implements OnInit {

  form!: any;
  auto!: Auto;
  title!: string;
  salvaButtonConfig!: MyButtonConfig;
  ripristinaButtonConfig!: MyButtonConfig;
  annullaButtonConfig!: MyButtonConfig;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const autoIdFromRoute = Number(routeParams.get('autoId'));
    if (autoIdFromRoute) {
      this.title = 'Modifica dati auto';
      this.auto = this.autoService.getAutoById(Number(autoIdFromRoute).valueOf());
      this.form = this.formBuilder.group({
        targa: this.auto.targa,
        produttore: this.auto.produttore,
        modello: this.auto.modello,
        annoImmatricolazione: this.auto.annoImmatricolazione,
      });
    } else {
      this.title = 'Creazione nuova auto';
      this.form = this.formBuilder.group({
        targa: '',
        produttore: '',
        modello: '',
        annoImmatricolazione: undefined,
      });

    }
    this.salvaButtonConfig = {
      text: 'Salva',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: ''
    }
    this.ripristinaButtonConfig = {
      text: '',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: 'refresh'
    }
    this.annullaButtonConfig = {
      text: 'Annulla',
      customCssClass: 'w-100 btn btn-lg btn-primary',
      icon: ''
    }
  }

  onClick(text: string) {

    switch (text) {
      case 'Salva':
        this.autoService.salvaOAggiornAuto(this.auto);
        this.router.navigateByUrl('/gestione_auto');
        break;
      case 'Annulla':
        this.router.navigateByUrl('/gestione_auto');
        break;
      default:
        this.ripristinaForm();
    }
  }

  ripristinaForm(): void {
    this.ngOnInit();
  }

}
