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

- "/nonPresentato" 

* **Method**: 
* **Description**: 
* **Headers**:
    * `Cookie: auth_token=...`
* **Response**:

Ecco la documentazione per l’endpoint **`/reception/non-presentato/{id}`**, nello **stesso stile** degli altri endpoint che hai fornito:

* "/reception/non-presentato/{id}" ✅

- **Method**: POST
- **Description**: Segna una prenotazione come *non presentato*, annullandone la validità. Solo il personale può effettuare questa operazione.
- **Headers**:

  * `Cookie: auth_token=...`
- **Path Parameter**:

  * `id`: integer, required – ID della prenotazione da segnare come non presentata
- **Response**:

  * 200 OK: `Prenotazione segnata come non presentato`
  * 404 Not Found: `Prenotazione non trovata o già gestita`
  * 403 Forbidden: `Accesso negato: solo impiegati possono registrare il non presentato`