import {Injectable} from '@angular/core';
import {Auto} from "../../interface/entity/auto";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() {
  }

  getAutoList(): Auto[] {
    return [];
  }

  eliminaAuto(auto: Auto): void {

  }

  cercaAutoDisponibiliNelPeriodo(dataInizioPeriodo: Date, dataFinePeriodo: Date): Auto[] {
    return [];
  }

  getAutoById(id: number): Auto {
    return {
      id: 0,
      annoImmatricolazione: 0,
      produttore: '',
      targa: '',
      modello: '',
      prenotazioni: []
    };
  }

  salvaOAggiornAuto(auto: Auto) {

  }
}
