import {Injectable} from '@angular/core';
import {Prenotazione} from "../../entity/prenotazione";
import {Utente} from "../../entity/utente";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../entity/auto";
import {Observable} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  endpoint: string = 'http://localhost:8080/api/prenotazione';

  constructor(private http: HttpClient) {
  }


  getPrenotazioniDaApprovare(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(`${this.endpoint}/lista_prenotazioni_da_approvare`);
  }

  getListaPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(`${this.endpoint}/lista_prenotazioni`);
  }

  getListaPrenotazioniUtente(id: number): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(`${this.endpoint}/prenotazioni_utente/${id}`);
  }

  getPrenotazioneInCorsoUtente(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.endpoint}/prenotazione_in_corso/${id}`);
  }

  approvaPrenotazione(prenotazione: Prenotazione): Observable<any> {
    prenotazione.approvata = true;
    return this.salvaAggiornaPrenotazione(prenotazione);
  }

  cancellaPrenotazione(prenotazione: Prenotazione): Observable<any> {
    return this.http.delete(`${this.endpoint}/elimina/${prenotazione.id}`)
  }

  salvaAggiornaPrenotazione(prenotazione: Prenotazione): Observable<any> {
    return this.http.post<Prenotazione>(`${this.endpoint}/salva_aggiorna_prenotazione`, prenotazione);
  }

  prenotazioniFormat(prenotazioni: Prenotazione[]): void {
    prenotazioni.forEach(prenotazione => {
      prenotazione.dataInizioFormat = moment(prenotazione.dataInizio, "YYYY-MM-DD").format("DD/MM/YYYY");
      prenotazione.dataFineFormat = moment(prenotazione.dataFine, "YYYY-MM-DD").format("DD/MM/YYYY");
      prenotazione.infoAuto = prenotazione.auto.modello + " " + prenotazione.auto.costruttore + ", " + prenotazione.auto.targa;
      prenotazione.approvataFormat = (prenotazione.approvata)? "Approvata" : "In approvazione";
    })
  }

}
