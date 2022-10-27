import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from "@angular/forms";
import {Utente} from "../../interface/entity/utente";
import {UtenteService} from "../../service/utente/utente.service";
import {MyButtonConfig} from "../../interface/button/MyButtonConfig";

@Component({
  selector: 'app-my-salva-crea-utente',
  templateUrl: './my-salva-crea-utente.component.html',
  styleUrls: ['./my-salva-crea-utente.component.css']
})
export class MySalvaCreaUtenteComponent implements OnInit {

  form!: any;
  utente!: Utente;
  title!: string;
  salvaButtonConfig!: MyButtonConfig;
  ripristinaButtonConfig!: MyButtonConfig;
  annullaButtonConfig!: MyButtonConfig;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private utenteService: UtenteService, private router: Router) {
  }

  ngOnInit(): void {

    const currentRoute = this.route.snapshot.toString();
    if (currentRoute.includes('modifica')) {
      this.title = 'Modifica credenziali';
      this.utente = this.utenteService.getUtenteByUsername(sessionStorage.getItem('utenteLoggato'));
      this.form = this.formBuilder.group({
        username: this.utente.username,
        password: '',
        email: this.utente.email
      });
    } else {
      this.title = 'Creazione nuovo utente';
      this.form = this.formBuilder.group({
        username: '',
        password: '',
        email: '',
        nome: '',
        cognome: '',
        dataNascita: null,
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
        this.utenteService.salvaOAggiornUtente(this.utente);
        if (this.utente.id) {
          this.router.navigateByUrl('/profilo');
        } else {
          this.router.navigateByUrl('/gestione_utenti');
        }
        break;
      case 'Annulla':
        if (this.utente.id) {
          this.router.navigateByUrl('/profilo');
        } else {
          this.router.navigateByUrl('/gestione_utenti');
        }
        break;
      default:
        this.ripristinaForm();
    }
  }

  ripristinaForm(): void {
    this.ngOnInit();
  }

}
