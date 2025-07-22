export type User = Ospite | Impiegato;

export interface Ospite {
  userType: 'ospite';
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  telefono: string;
  codiceFiscale: string;
  azienda: string;
  idTipoOspite: number;
}

export interface Impiegato {
  userType: 'impiegato';
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  password: string;
  idRuolo: number;
  isEsterno: boolean;
}

export type Ruolo = {
  id: number,
  nome: string,
}

export type TipoOspite = {
  id: number,
  tipologia: string,
}

export type Stato = {
  id: number,
  nome: string,
}

export type LoginRequest = {
  email: string | null;
  password: string | null;
}

export type PrenotazioneRequest = {
  data: string,
  ora: string,
  identificazioneProfessionale: string,
  motivoVisita: string,
  stato?: number,
}

export type Prenotazione = {
  id: number,
  idOspite: number,
  stato: number,
  entrata: any,
  uscita: any,
  identificazioneProfessionale: string,
  motivo: string,
  dataPrenotazione: string
}

export type Visite = {
  id?: number,
  id_referente: number,
  id_prenotazione: number,
  id_motivazione: number,
}
