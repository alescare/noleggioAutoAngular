import {Prenotazione} from "./prenotazione";

export interface Utente {

  id: number;
  username: string;
  password: string;
  nome: string;
  cognome: string;
  admin: boolean;
  dataNascita: Date;
  email: string;
  prenotazioni: Prenotazione[];
}
