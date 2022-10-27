import {Prenotazione} from "./prenotazione";

export interface Auto {

  id: Number;
  produttore: string;
  modello: string;
  targa: string;
  annoImmatricolazione: Number;
  prenotazioni: Prenotazione[];

}
