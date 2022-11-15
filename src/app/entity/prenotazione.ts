import {Utente} from "./utente";
import {Auto} from "./auto";

export class Prenotazione {

  id!: number;
  dataInizio!: any;
  dataInizioFormat?: string;
  dataFine!: any;
  dataFineFormat?: string;
  utente!: Utente;
  auto!: Auto;
  approvata!: boolean;
  approvataFormat?: string;
  infoAuto?: string

}
