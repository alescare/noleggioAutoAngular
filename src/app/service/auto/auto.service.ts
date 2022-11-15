import {Injectable} from '@angular/core';
import {Auto} from "../../entity/auto";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  endpoint: string = 'http://localhost:8080/api/auto';

  constructor(private http: HttpClient) {
  }

  getListaAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${this.endpoint}/lista_auto`);
  }

  eliminaAuto(auto: Auto): Observable<any> {
    return this.http.delete(`${this.endpoint}/elimina/${auto.id}`);
  }

  cercaAutoDisponibiliNelPeriodo(dataInizioPeriodo: Date, dataFinePeriodo: Date): Observable<Auto[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("dataInizioPeriodo", dataInizioPeriodo.toString()).append("dataFinePeriodo", dataFinePeriodo.toString());
    return this.http.get<Auto[]>(`${this.endpoint}/lista_auto_disponibili`, {params: queryParams});
  }

  getAutoById(id: number): Observable<Auto> {
    return this.http.get<Auto>(`${this.endpoint}/${id}`);
  }

  salvaOAggiornAuto(auto: Auto): Observable<any> {
    return this.http.post<Auto>(`${this.endpoint}/salva_aggiorna_auto`, auto);
  }
}
