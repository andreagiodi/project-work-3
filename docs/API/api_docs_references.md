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

- "/register/staff" ✅
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

- "/api/referente/prenotazioni" ✅

- **Method**: `GET`
  - **Description**: Gets the list of bookings associated with the authenticated referent.
  - **Security**: Requires `auth_token` of a **referent**.
  - **Response**: JSON array of bookings.

- "/api/referente/prenotazioni/{id}/approva" ✅

- **Method**: `POST`
  - **Description**: Approves a booking request.
  - **Security**: Requires `auth_token` of a **referent**.
  - **Parameters**:
    - `id`: integer, path, required (The booking ID)
  - **Response**: JSON object of the updated booking.

- "/api/referente/prenotazioni/{id}/rifiuta" ✅
    - **Method**: `POST`
    - **Description**: Rejects a booking request.
    - **Security**: Requires `auth_token` of a **referent**.
    - **Parameters**:
      - `id`: integer, path, required (The booking ID)
    - **Response**: JSON object of the updated booking.

- "/api/referente/prenotazioni/{id}" ✅
      - **Method**: `PUT`
      - **Description**: Modifies the date and time of an existing booking.
      - **Security**: Requires `auth_token` of a **referent**.
      - **Parameters**:
          - `id`: integer, path, required (The booking ID)
          - `data`: string, body, required (format "YYYY-MM-DD")
          - `ora`: string, body, required (format "HH:MM:SS")
      - **Response**: JSON object of the updated booking.

# Reception - Abi

# Admin - Andrea

- "/admin/ospiti" ✅

  - **Method**: GET
  - **Description**: Get the list of all registered ospiti.
  - **Response**: JSON array containing the ospiti.

- "/admin/impiegati" ✅

  - **Method**: GET
  - **Description**: Get the list of all registered impiegati.
  - **Response**: JSON array containing the impiegati.

- "/admin/impiegati/{id}/ruolo" ✅

  - **Method**: POST
  - **Parameters**:
    - `idRuolo`: integer, required (ID of the role to set)
  - **Description**: Set a role for a specified impiegato.
  - **Response**: JSON array containing the impiegati.

- "/admin/impiegati/{id}/password" ✅

  - **Method**: POST
  - **Parameters**:
    - `password`: string, required (new password)
  - **Description**: Set a new password for a specified impiegato.
  - **Response**: JSON object containing the updated user.

- "/admin/ospiti/{id}/password" ✅
  - **Method**: POST
  - **Parameters**:
    - `password`: string, required (new password)
  - **Description**: Set a new password for a specified ospite.
  - **Response**: JSON object containing the updated user.
