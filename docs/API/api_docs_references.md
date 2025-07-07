# API Docs References

1. "/login" ✅
    - **Method**: POST
    - **Description**: Authenticate a user(ospite/impiegato).
    - **Parameters**:
      - `email`: string, required
      - `password`: string, required
    - **Response**: JSON object containing the user and save the cookie in the client.

2. "/auth/me" ✅
    - **Method**: GET
    - **Description**: Get the authenticated user by checking the cookie.
    - **Response**: JSON object containing the user.


3. "/register/ospite" ✅
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

4. "/register/staff" ✅
    - **Method**: POST
    - **Description**: Register a new staff member (impiegato).
    - **Parameters**:
        - `email`: string, required
        - `password`: string, required
        - `nome`: string, required
        - `cognome`: string, required
        - `esterno`: boolean, required
    - **Response**: JSON object containing the created staff member.

5. "/prenotazione/create" ✅
    - **Method**: POST
    - **Description**: Create a new reservation by the ospite.
    - **Parameters**:
      - `data`: date, required
      - `ora`: time, required
      - `identificazioneProfessionale`: string, required
      - `motivoVisita`: string, required
    - **Response**: JSON object containing the created reservation.

6. "/prenotazione/list" ✅
    - **Method**: GET
    - **Description**: Get the list of reservations for the authenticated user.
    - **Response**: JSON array containing the reservations.



# Admin

7. "/admin/ospiti"
    - **Method**: GET
    - **Description**: Get the list of all registered ospiti.
    - **Response**: JSON array containing the ospiti.
