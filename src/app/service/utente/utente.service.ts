import {Injectable} from '@angular/core';
import {Utente} from "../../interface/entity/utente";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor() {
  }

  cercaUtentePerCredenziali(username: string, password: string): Utente {
    //invocazione service
    if (username == 'admin') {
      return {
        username: 'admin',
        admin: true,
        password: password,
        dataNascita: new Date('10-10-2000'),
        cognome: '',
        id: 1,
        nome: '',
        email: '',
        prenotazioni: []
      }
    }
    return {
      username: username,
      admin: false,
      password: password,
      dataNascita: new Date('10-10-2000'),
      cognome: '',
      id: 1,
      nome: '',
      email: '',
      prenotazioni: []
    }
  }

  eliminaUtente(row: any): void {

  }

  getUtenteByUsername(username: string | null): Utente {
    return {
      username: 'admin',
      admin: true,
      password: '',
      dataNascita: new Date('10-10-2000'),
      cognome: '',
      id: 1,
      nome: '',
      email: '',
      prenotazioni: []
    }
  }

  salvaOAggiornUtente(utente: Utente) {

  }
}
