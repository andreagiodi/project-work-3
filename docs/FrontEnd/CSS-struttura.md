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
            - > NEW CLASSES IN STYLE.CSS FROM LUC (20/07/2025):
              > -
                - "boxVerdeScuro" (LUCA) --> box in storico utente
                - baseLayout --> base layout to apply to ospite.component.html / interno.component.html (grid works)
                - logoutUserIcon --> styling for header with user icon + logout button
                    - userIcon --> styling for smal user icon on top right of screen
                    - logoutButton --> logout button style
                - popUpClass --> styling for popUp boxes (mainly positioning and sizing)
                    - some tag-specific restyling of elements only inside of the popup (e.g: .popUpClass h4 --> style
                      only h4 in popupClass)
                    - popUp_header --> pupUp title and esc button stlying and postioning
                - escButton --> generic esc (X button) styling
    - > P.S: I've removed some unused and repeated styles from ospite.component.css, I've insted put them in style.css
      since they can be reused many times

Componente singolo CSS:

- id
- classi

classe = "box" (sfondo quello verde): ->
{
background color: var(--window)
}
classe = "boxVerdeScuro" (sfondo verde scuro tipo Storico Utente): ->
{
background color: var(--)
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
        - Bar
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
    


