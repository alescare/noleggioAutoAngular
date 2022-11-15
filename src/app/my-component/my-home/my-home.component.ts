import {Component, OnInit} from '@angular/core';
import {Utente} from "../../entity/utente";

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  utente!: Utente;

  constructor() {
  }

  ngOnInit(): void {
    this.utente = JSON.parse(localStorage.getItem('utenteLoggato') as string);
  }

}
