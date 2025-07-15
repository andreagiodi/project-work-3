Style CSS:
- button
- background color
- classi:
    - "box"
    - "pulsanteVerdeScuro"
    - "pulsanteRosso"
    - "pulsanteGiallo"
    - "pulsanteVerdeChiaro"
    - "pulsanteAzzurro"
    - "sfondoSideBar"
    - "caselle"
 
Componente singolo CSS:
- id
- classi
- ecc...


classe = "box" (sfondo quello verde): ->
{
background color: --window
}
- Benvenuto
- Login
- Registrazione
- Ospite: 
  - Prenota Appuntamento 
  - Richiaeste in Sospeso
- Prossimi Appuntamenti (i box)
- Referente: 
  - Nuovo Appuntamento 
  - Appuntamenti in Sospeso (non i box)
  - Accetta Appuntamento (non i box)
- Admin: 
  - Untenti (i box)
  - Utente
  - Storico Utente (non i box)
  - Warning


classe = "pulsanteVerdeScuro": ->
{
background color: --button-primary-bg
text: --button-primary-text
}
- Benvenuto:
  - LOGIN
  - REGISTRAZIONE INTERNO
  - REGISTRAZIONE ESTERNO 
- Login:
  - LOGIN
- Registrazione Interna/Esterna:
  - REGISTRATI 
- Ospite: 
  - PRENOTAME (Prenota Appuntamento)
  - Richiaeste in Sospeso (pulsante)
- Receptionist: 
  - Storico Utente (i box)
- Admin: 
  - VEDI DETTAGLI & PERMESSI (Utente)
- Pulsanti sopra: 
  - Admin
  - Referente 
  - Receptionist


classe = "pulsanteRosso": ->
{
background color: --color-error,
text: --button-primary-text
}
- Receptionist: 
  - NON PRESENTATO
- Referente: 
  - RIFIUTA (Nuovo Appuntamento)
  - RIFIUTA (Accetta Appuntamento)
- Admin: 
  - DISATTIVA UTENTE (Utente)
  - ANNULLA (Warning)


classe = "pulsanteGiallo" ->
{
background color: --color-warning,
text: --button-primary-text
}
- Receptionist:
 - MODIFICA (info opsite)
- Referente:
  - DA ACCETTARE
  - MODIFICA (Accetta Appuntamento)
  - MODIFICA (Nuovo Appuntamento)
- Admin:
  - MODIFICA (Utente)


classe = "pulsanteVerdeChiaro" ->
{
background color: --color-success,
text: --button-primary-text
}
- Receptionist:
  - APLLICA (info opsite)
- Referente:
  - ACCETTA (Nuovo Appuntamento)
  - ACCETTA (Accetta Appuntamento)
- Admin:
  - SALVA MODIFICHE (Utente)
  - CONFERMA (Warning)


classe = "pulsanteAzzurro" ->
{
background color: --color-info,
text: --button-primary-text
}
- Referente:
  - APPUNTAMENTI IN SOSPESO
- Admin:
  - STORICO UTENTE (Utente)


classe = "sfondoSideBar" ->
{
background color:--sidebar
}
- Prossimi appuntamenti
- Admin:
  -Utenti
- Referente:
 - Appuntamenti in Sospeso (i box)


classe = "caselle"->
{
background color:--button-secondary-bg
}
- Login:
  - IMG
  - Email
  - Password
  - Piccolo box
- Registrazione Interno:
  - IMG
  - Nome
  - Cognome
  - Email
  - Password
  - Conferma Password
- Registrazione Esterno:
  - IMG
  - Nome
  - Cognome
  - Codice Fiscale
  - Email
  - Telefono
  - Nome Azienda
  - Password
  - Conferma Password
- Ospite:
  - Prenota Appuntamento:
    - Data
    - Ora
    - Professione
    - Motivo della visita
  - Richieste in Sospeso:
    - Bar
- Prossimi Appuntamenti:
  - Bar
- Receptionist:
  - InfoOspite:
    - IMG
    - Data
    - Ora
    - Note  
  - Storico Utente:
    - Bar
- Referente:
  - Nuovo Appuntamento:
    - Codice Fiscale
    - Cognome
    - Nome
    - Email
    - Telefono
    - Data
    - Ora
  - Appuntamenti in sospeso:
    -  Bar
  - Appuntamenti da accettare:
    - Data
    - Ora
- Admin:
  - Utenti:
    - Bar
  - Utente:
    - Ruolo
    - Password
  - Storico Utente
    - Bar
  - Warning
    - Bar
    


