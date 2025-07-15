export type UserType = 'ospite' | 'impiegato';

export type User = Ospite | Impiegato;

export interface Ospite {
  userType: 'ospite';
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
  nome: string;
  cognome: string;
  email: string;
  password: string;
  idRuolo: number;
  isEsterno: boolean;
}

export type LoginRequest = {
  email: string | null;
  password: string | null;
}

