# API Docs References

- "/login" ✅
    - **Method**: POST
    - **Description**: Authenticate a user(ospite/impiegato).
    - **Parameters**:
      - `email`: string, required
      - `password`: string, required
    - **Response**: JSON object containing the user and save the cookie in the client.

- "/auth/me" ✅
    - **Method**: GET
    - **Description**: Get the authenticated user by checking the cookie.
    - **Response**: JSON object containing the user.


- "/register/ospite" ✅
    - **Method**: POST
    - **Description**: Register a new user (ospite).
    - **Parameters**:
        - `email`: string, required
        - `password`: string, required
        - `nome`: string, required
        - `cognome`: string, required
        - `telefono`: string, required
        - `codiceFiscale`: string, required
        - `azienda`: string, required
        - `idTipoOspite`: integer, required
    - **Response**: JSON object containing the created user (ospite).

-  "/register/staff" ✅
    - **Method**: POST
    - **Description**: Register a new staff member (impiegato).
    - **Parameters**:
        - `email`: string, required
        - `password`: string, required
        - `nome`: string, required
        - `cognome`: string, required
        - `esterno`: boolean, required
    - **Response**: JSON object containing the created staff member.


# Ospite

- "/prenotazione/create" ✅
    - **Method**: POST
    - **Description**: Create a new reservation by the ospite.
    - **Parameters**:
      - `data`: date, required
      - `ora`: time, required
      - `identificazioneProfessionale`: string, required
      - `motivoVisita`: string, required
    - **Response**: JSON object containing the created reservation.

- "/prenotazione/list" ✅
    - **Method**: GET
    - **Description**: Get the list of reservations for the authenticated user.
    - **Response**: JSON array containing the reservations.


# Referente - Leo

# Reception - Abi

- "/reception/ingresso" ✅

* **Method**: POST
* **Description**: Registra l'ingresso di un ospite. Solo il personale può effettuare questa operazione.
* **Headers**:
    * `Cookie: auth_token=...`
* **Body Parameters** (JSON):
    * `id`: integer (facoltativo, se già esistente)
    * `nome`: string, required
    * `cognome`: string, required
    * `email`: string, required
    * `telefono`: string, required
    * `codiceFiscale`: string, required
    * `azienda`: string, required
    * `idTipoOspite`: integer, required
* **Response**: JSON object contenente l’oggetto `Ospite` aggiornato con la data di entrata.

- "/reception/uscita/{id}" ✅

* **Method**: POST
* **Description**: Registra l'uscita di un ospite identificato tramite ID. Solo il personale può effettuare questa operazione.
* **Headers**:
    * `Cookie: auth_token=...`
* **Path Parameter**:
    * `id`: integer, required – ID dell'ospite
* **Response**:
    * 200 OK: `Uscita registrata con successo`
    * 404 Not Found: `Ospite non trovato o già uscito`
    * 403 Forbidden: `Accesso negato`


- "/reception/presenti" ✅

* **Method**: GET
* **Description**: Restituisce la lista degli ospiti attualmente presenti nella struttura (cioè senza una data di uscita). Solo il personale può accedere.
* **Headers**:
    * `Cookie: auth_token=...`
* **Response**: JSON array di oggetti `Ospite` ancora presenti.


# Admin - Andrea

- "/admin/ospiti" ✅
    - **Method**: GET
    - **Description**: Get the list of all registered ospiti.
    - **Response**: JSON array containing the ospiti.

- "/admin/impiegati" ✅
    - **Method**: GET
    - **Description**: Get the list of all registered impiegati.
    - **Response**: JSON array containing the impiegati.

- "/impiegati/{id}/ruolo" ✅
    - **Method**: POST
    - **Parameters**:
      - `idRuolo`: integer, required (ID of the role to set)
    - **Description**: Set a role for a specified impiegato.
    - **Response**: JSON array containing the impiegati.