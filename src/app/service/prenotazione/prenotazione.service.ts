import { Injectable } from '@angular/core';
import {Prenotazione} from "../../interface/entity/prenotazione";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  getPrenotazioniDaApprovare(): Prenotazione[]{
    return [];
  }
  getPrenotazioni(): Prenotazione[]{
    return [];
  }

  approvaPrenotazione(prenotazione: Prenotazione): void{

  }

  cancellaPrenotazione(prenotazione: Prenotazione): void{

  }

  creaPrenotazione(nuovaPrenotazione: Prenotazione): void {

  }


  constructor() { }
}
