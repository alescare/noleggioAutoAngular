import {Component, OnInit} from '@angular/core';
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AutoService} from "../../service/auto/auto.service";
import {Auto} from "../../entity/auto";

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
  private idAuto!: number;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private autoService: AutoService, private router: Router) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idAuto = Number(routeParams.get('autoId'));
    if (this.idAuto) {
      this.getAuto(this.idAuto);
    } else {
      this.initForm();
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

  getAuto(id: number): void {
    this.autoService.getAutoById(id).subscribe(auto => {
      this.auto = auto;
      this.initForm();
    });
  }

  initForm() {
    if (this.idAuto !== 0) {
      this.title = 'Modifica dati auto';
    } else {
      this.title = 'Creazione nuova auto';
      this.auto = new Auto();
    }
    this.initCampiForm(this.idAuto);
  }

  initCampiForm(id: number): void {
    if (id !== 0) {
      this.form = this.formBuilder.group({
        targa: this.auto.targa,
        costruttore: this.auto.costruttore,
        modello: this.auto.modello,
        annoImmatricolazione: this.auto.annoImmatricolazione,
        tipologia: this.auto.tipologia
      });
    } else {
      this.auto = new Auto();
      this.form = this.formBuilder.group({
        targa: '',
        costruttore: '',
        modello: '',
        annoImmatricolazione: undefined,
        tipologia: ''
      });
    }

  }

  onClick(text: string) {

    switch (text) {
      case 'Salva':
        this.autoService.salvaOAggiornAuto(this.auto).subscribe();
        this.router.navigateByUrl('/gestione_auto');
        break;
      case 'Annulla':
        this.router.navigateByUrl('/gestione_auto');
        break;
      default:
        (this.idAuto)? this.getAuto(this.idAuto) : this.initForm();
    }
  }

}
