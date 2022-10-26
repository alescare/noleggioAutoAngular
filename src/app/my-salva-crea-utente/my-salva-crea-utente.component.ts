import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-salva-crea-utente',
  templateUrl: './my-salva-crea-utente.component.html',
  styleUrls: ['./my-salva-crea-utente.component.css']
})
export class MySalvaCreaUtenteComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const utenteIdFromRoute = routeParams.get('utenteId');
    if (utenteIdFromRoute == null){
    } else {
    }


  }

}
