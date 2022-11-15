import {Injectable} from '@angular/core';
import {Utente} from "../../entity/utente";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  endpoint: string = 'http://localhost:8080/api/utente';

  constructor(private http: HttpClient) {
  }


  eliminaUtente(utente: Utente): Observable<any> {
    return this.http.delete(`${this.endpoint}/elimina/${utente.id}`);

  }

  salvaOAggiornUtente(utente: Utente): Observable<any> {
      return this.http.post<Utente>(`${this.endpoint}/salva_aggiorna_utente`, utente);
  }

  getListaUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(`${this.endpoint}/lista_utenti`);
  }
}
