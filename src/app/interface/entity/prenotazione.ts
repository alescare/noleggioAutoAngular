import {Utente} from "./utente";
import {Auto} from "./auto";

export interface Prenotazione {

  dataInizio: Date;
  dataFine: Date;
  utente: Utente;
  auto: Auto;
  approvata: boolean;

}
