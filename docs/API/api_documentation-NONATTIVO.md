# 📄 Documentazione API - ProjectWorkBackend

## 🔐 Autenticazione e Registrazione

### Registrazione
| Metodo | Endpoint            | Descrizione                    | Parametri                           |
|--------|---------------------|-------------------------------|-------------------------------------|
| POST   | `/register/ospite`  | Registra un nuovo ospite      | Corpo `JSON` - RegisterOspiteRequest |
| POST   | `/register/staff`   | Registra un nuovo impiegato   | Corpo `JSON` - RegisterImpiegatoRequest |
| POST   | `/register/validate-email` | Verifica disponibilità email | Corpo `JSON` - `{"email": "..."}`  |

### Login e Logout
| Metodo | Endpoint   | Descrizione                | Parametri                        |
|--------|------------|----------------------------|----------------------------------|
| POST   | `/login`   | Effettua il login         | Corpo `JSON` - LoginRequest      |
| POST   | `/logout`  | Effettua il logout        | -                                |

### Autenticazione Avanzata
| Metodo | Endpoint              | Descrizione                    | Parametri                |
|--------|-----------------------|-------------------------------|--------------------------|
| GET    | `/auth/profile`       | Profilo completo utente       | Cookie: `auth_token`     |
| GET    | `/auth/me`           | Informazioni base utente      | Cookie: `auth_token`     |
| GET    | `/auth/user-type`    | Tipo di utente corrente       | Cookie: `auth_token`     |
| GET    | `/auth/check-ospite` | Verifica accesso ospite       | Cookie: `auth_token`     |
| GET    | `/auth/check-staff`  | Verifica accesso staff        | Cookie: `auth_token`     |

---

## 👤 Ospite
| Metodo | Endpoint                     | Descrizione                    | Parametri                           |
|--------|------------------------------|-------------------------------|-------------------------------------|
| GET    | `/ospite/all`               | Elenca tutti gli ospiti       | -                                   |
| GET    | `/ospite/{id}`              | Restituisce ospite per ID     | `id` (Path Variable)                |
| POST   | `/ospite/add`               | Aggiunge un nuovo ospite      | Corpo `JSON` dell'ospite            |
| POST   | `/ospite/register`          | Registra nuovo ospite         | Corpo `JSON` dell'ospite            |
| GET    | `/ospite/profile`           | Profilo ospite corrente       | Cookie: `ospite_id`                 |
| GET    | `/ospite/migrate-passwords` | Migra password in chiaro      | -                                   |
| DELETE | `/ospite/{id}`              | Elimina ospite per ID         | `id` (Path Variable)                |

---

## 👔 Impiegato
| Metodo | Endpoint            | Descrizione                 | Parametri                           |
|--------|---------------------|-----------------------------|-------------------------------------|
| GET    | `/impiegato/all`   | Elenca tutti gli impiegati  | -                                   |
| GET    | `/impiegato/{id}`  | Restituisce impiegato per ID| `id` (Path Variable)                |
| POST   | `/impiegato/add`   | Aggiunge nuovo impiegato    | Corpo `JSON` dell'impiegato         |
| DELETE | `/impiegato/{id}`  | Elimina impiegato per ID    | `id` (Path Variable)                |

---

## 📋 Prenotazione
| Metodo | Endpoint             | Descrizione                 | Parametri                           |
|--------|----------------------|-----------------------------|-------------------------------------|
| GET    | `/prenotazione/all` | Elenca tutte le prenotazioni| -                                   |
| GET    | `/prenotazione/{id}`| Restituisce prenotazione per ID | `id` (Path Variable)            |
| POST   | `/prenotazione/add` | Aggiunge nuova prenotazione | Corpo `JSON` della prenotazione     |
| DELETE | `/prenotazione/{id}`| Elimina prenotazione per ID | `id` (Path Variable)                |

---

## 👁️ Visita
| Metodo | Endpoint           | Descrizione              | Parametri                           |
|--------|--------------------|--------------------------|------------------------------------|
| GET    | `/visita/all`      | Elenca tutte le visite   | -                                  |
| GET    | `/visita/{id}`     | Restituisce visita per ID| `id` (Path Variable)               |
| POST   | `/visita/add`      | Aggiunge nuova visita    | Corpo `JSON` della visita          |
| DELETE | `/visita/{id}`     | Elimina visita per ID    | `id` (Path Variable)               |

---

## 💡 Motivazione
| Metodo | Endpoint             | Descrizione                 | Parametri                      |
|--------|----------------------|-----------------------------|--------------------------------|
| GET    | `/motivazione/all`  | Elenca tutte le motivazioni | -                              |
| GET    | `/motivazione/{id}` | Restituisce motivazione per ID | `id` (Path Variable)        |
| POST   | `/motivazione/add`  | Aggiunge una motivazione    | `tipologia` (Request Param)    |
| DELETE | `/motivazione/{id}` | Elimina motivazione per ID  | `id` (Path Variable)          |

---

## ✅ Stato
| Metodo | Endpoint           | Descrizione                | Parametri                      |
|--------|--------------------|----------------------------|-----------------------------|
| GET    | `/stato/all`       | Elenca tutti gli stati     | -                           |
| GET    | `/stato/{id}`      | Restituisce stato per ID   | `id` (Path Variable)        |
| POST   | `/stato/add`       | Aggiunge un nuovo stato    | `nome` (Request Param)      |
| DELETE | `/stato/{id}`      | Elimina stato per ID       | `id` (Path Variable)        |

---

## 👥 Tipo Ospite
| Metodo | Endpoint            | Descrizione                | Parametri                      |
|--------|---------------------|----------------------------|-------------------------------|
| GET    | `/tipo_ospite/all` | Elenca tutti i tipi ospite | -                             |
| GET    | `/tipo_ospite/{id}`| Restituisce tipo per ID    | `id` (Path Variable)          |
| POST   | `/tipo_ospite/add` | Aggiunge un nuovo tipo     | `tipologia` (Request Param)   |
| DELETE | `/tipo_ospite/{id}`| Elimina tipo per ID        | `id` (Path Variable)          |

---

## 👔 Ruolo
| Metodo | Endpoint           | Descrizione              | Parametri                           |
|--------|--------------------|--------------------------|------------------------------------|
| GET    | `/ruolo/all`       | Elenca tutti i ruoli     | -                                  |
| GET    | `/ruolo/{id}`      | Restituisce ruolo per ID | `id` (Path Variable)               |
| POST   | `/ruolo/add`       | Aggiunge nuovo ruolo     | `nome` (Request Param)             |
| DELETE | `/ruolo/{id}`      | Elimina ruolo per ID     | `id` (Path Variable)               |

---

## 🔐 Permesso
| Metodo | Endpoint           | Descrizione                | Parametri                           |
|--------|--------------------|-----------------------------|-----------------------------------|
| GET    | `/permesso/all`   | Elenca tutti i permessi    | -                                 |
| GET    | `/permesso/{id}`  | Restituisce permesso per ID| `id` (Path Variable)              |
| POST   | `/permesso/add`   | Aggiunge nuovo permesso    | `nome` (Request Param)            |
| DELETE | `/permesso/{id}`  | Elimina permesso per ID    | `id` (Path Variable)              |

---

## 🔑 Ruolo_Permesso
| Metodo | Endpoint                      | Descrizione                  | Parametri                           |
|--------|-------------------------------|------------------------------|-------------------------------------|
| GET    | `/ruolo_permesso/all`        | Elenca tutte le relazioni   | -                                   |
| POST   | `/ruolo_permesso/add`        | Aggiunge nuova relazione     | Corpo `JSON` - Ruolo_Permesso       |
| DELETE | `/ruolo_permesso/delete/{idRuoli}/{idPermessi}` | Elimina relazione | `idRuoli`, `idPermessi` (Path Variable) |

---

## 📅 Log_Evento
| Metodo | Endpoint           | Descrizione                 | Parametri                           |
|--------|--------------------|-----------------------------|-------------------------------------|
| GET    | `/log_evento/all` | Elenca tutti gli eventi     | -                                   |
| GET    | `/log_evento/{id}`| Restituisce evento per ID   | `id` (Path Variable)                |
| POST   | `/log_evento/add`| Aggiunge nuovo evento       | Corpo `JSON` del log evento         |
| DELETE | `/log_evento/{id}`| Elimina evento per ID       | `id` (Path Variable)                |

---

## 📝 Modelli JSON

### RegisterOspiteRequest
```json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "email": "mario.rossi@example.com",
  "password": "password123",
  "telefono": "1234567890",
  "codiceFiscale": "RSSMRA80A01H501U",
  "azienda": "Azienda SpA",
  "idTipoOspite": 1
}
```

### RegisterImpiegatoRequest
```json
{
  "nome": "Giulia",
  "cognome": "Verdi",
  "email": "giulia.verdi@company.com",
  "password": "password123",
  "idRuolo": 2,
  "isEsterno": false
}
```

### LoginRequest
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Prenotazione
```json
{
  "idOspite": 1,
  "stato": 1,
  "entrata": "2025-07-01T09:00:00",
  "uscita": "2025-07-01T17:00:00",
  "identificazioneProfessionale": "Badge ID",
  "motivo": "Riunione di lavoro"
}
```

### Visita
```json
{
  "idReferente": 1,
  "idPrenotazione": 1,
  "idMotivazione": 1
}
```

### LogEvento
```json
{
  "idOspite": 1,
  "idImpiegato": null,
  "idMotivazione": 1,
  "tipoUtente": "ospite",
  "azione": "login",
  "data": "2025-07-01",
  "ora": "09:00:00"
}
```

---

## 🍪 Gestione Cookie

L'API utilizza cookie HTTP per la gestione dell'autenticazione:

- **`auth_token`**: Token JWT per utenti autenticati (ospiti e impiegati)
- **`ospite_id`**: ID sessione per endpoint legacy degli ospiti

### Configurazione Cookie:
- **HttpOnly**: `true` (sicurezza)
- **Path**: `/`
- **MaxAge**: 24 ore (86400 secondi)

---

## 🔒 Sicurezza

- Le password sono criptate usando **BCrypt**
- I token JWT sono firmati con chiave segreta
- Tutti gli endpoint di autenticazione richiedono cookie validi
- Le password non vengono mai restituite nelle risposte API

---

## 📊 Codici di Stato HTTP

| Codice | Descrizione                    |
|--------|-------------------------------|
| 200    | Successo                      |
| 400    | Richiesta non valida          |
| 401    | Non autenticato               |
| 403    | Accesso negato                |
| 500    | Errore interno del server     |

---

## 🚀 Esempi di Utilizzo

### Flusso di Registrazione e Login
```javascript
// 1. Registrazione ospite
fetch('/register/ospite', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({...}),
  credentials: 'include'
});

// 2. Login
fetch('/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({...}),
  credentials: 'include'
});

// 3. Accesso al profilo
fetch('/auth/profile', {
  credentials: 'include'
});
```

### Creazione Prenotazione
```javascript
fetch('/prenotazione/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({...}),
  credentials: 'include'
});
```