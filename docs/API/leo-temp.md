# Referente - Leo

- "/api/referente/prenotazioni" ✅

  - **Method**: `GET`
  - **Description**: Ottiene la lista delle prenotazioni associate al referente autenticato.
  - **Security**: Richiede `auth_token` di un **referente**.
  - **Response**: Array JSON di prenotazioni.

- "/api/referente/prenotazioni/{id}/approva" ✅

  - **Method**: `POST`
  - **Description**: Approva una richiesta di prenotazione.
  - **Security**: Richiede `auth_token` di un **referente**.
  - **Parameters**:
    - `id`: integer, path, required (ID della prenotazione)
  - **Response**: JSON object della prenotazione aggiornata.

- "/api/referente/prenotazioni/{id}/rifiuta" ✅
  - **Method**: `POST`
  - **Description**: Rifiuta una richiesta di prenotazione.
  - **Security**: Richiede `auth_token` di un **referente**.
  - **Parameters**:
    - `id`: integer, path, required (ID della prenotazione)
  - **Response**: JSON object della prenotazione aggiornata.
