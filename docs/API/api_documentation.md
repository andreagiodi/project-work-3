# 📄 Documentazione API - ProjectWorkBackend

## ✅ Stato
| Metodo | Endpoint           | Descrizione                | Parametri                      |
|--------|--------------------|----------------------------|-----------------------------|
| GET    | `/stato/all`       | Elenca tutti gli stati    | -                           |
| GET    | `/stato/{id}`      | Restituisce stato per ID  | `id` (Path Variable) |
| POST   | `/stato/add`       | Aggiunge un nuovo stato   | `nome` (Request Param) |
| DELETE | `/stato/{id}`      | Elimina stato per ID      | `id` (Path Variable) |

---

## 👥 Tipo Ospite
| Metodo | Endpoint            | Descrizione           | Parametri                      |
|--------|---------------------|-----------------------|-----------------------------|
| GET    | `/tipo_ospite/all` | Elenca tutti           | -                           |
| GET    | `/tipo_ospite/{id}`| Restituisce per ID    | `id` (Path Variable) |
| POST   | `/tipo_ospite/add` | Aggiunge un nuovo tipo | `tipologia` (Request Param) |
| DELETE | `/tipo_ospite/{id}`| Elimina per ID        | `id` (Path Variable) |

---

## 👤 Ospite
| Metodo | Endpoint        | Descrizione              | Parametri                           |
|--------|-----------------|--------------------------|-----------------------------|
| GET    | `/ospite/all`   | Elenca tutti gli ospiti | -                           |
| GET    | `/ospite/{id}`  | Restituisce ospite per ID | `id` (Path Variable) |
| POST   | `/ospite/add`   | Aggiunge un nuovo ospite | Corpo `JSON` dell'ospite |
| DELETE | `/ospite/{id}`  | Elimina ospite per ID     | `id` (Path Variable) |

---

## 💡 Motivazione
| Metodo | Endpoint            | Descrizione              | Parametri                      |
|--------|---------------------|--------------------------|-----------------------------|
| GET    | `/motivazione/all` | Elenca tutte             | -                           |
| GET    | `/motivazione/{id}`| Restituisce per ID       | `id` (Path Variable) |
| POST   | `/motivazione/add` | Aggiunge una motivazione | `tipologia` (Request Param) |
| DELETE | `/motivazione/{id}`| Elimina per ID           | `id` (Path Variable) |

---

## 📋 Prenotazione
| Metodo | Endpoint             | Descrizione             | Parametri                           |
|--------|----------------------|-------------------------|-----------------------------|
| GET    | `/prenotazione/all` | Elenca tutte            | -                           |
| GET    | `/prenotazione/{id}`| Restituisce per ID       | `id` (Path Variable) |
| POST   | `/prenotazione/add` | Aggiunge nuova prenotazione | Corpo `JSON` |
| DELETE | `/prenotazione/{id}`| Elimina per ID           | `id` (Path Variable) |

---

## 👁️ Visita
| Metodo | Endpoint           | Descrizione           | Parametri                           |
|--------|--------------------|-----------------------|-----------------------------|
| GET    | `/visita/all`      | Elenca tutte            | -                           |
| GET    | `/visita/{id}`     | Restituisce per ID       | `id` (Path Variable) |
| POST   | `/visita/add`      | Aggiunge nuova visita    | Corpo `JSON` |
| DELETE | `/visita/{id}`     | Elimina per ID           | `id` (Path Variable) |

---

## 👔 Ruolo
| Metodo | Endpoint           | Descrizione           | Parametri                           |
|--------|--------------------|-----------------------|-----------------------------|
| GET    | `/ruolo/all`       | Elenca tutti           | -                           |
| GET    | `/ruolo/{id}`      | Restituisce per ID       | `id` (Path Variable) |
| POST   | `/ruolo/add`       | Aggiunge nuovo ruolo     | `nome` (Request Param) |
| DELETE | `/ruolo/{id}`      | Elimina per ID           | `id` (Path Variable) |

---

## 👔 Impiegato
| Metodo | Endpoint           | Descrizione           | Parametri                           |
|--------|--------------------|-----------------------|-----------------------------|
| GET    | `/impiegato/all`  | Elenca tutti            | -                           |
| GET    | `/impiegato/{id}` | Restituisce per ID       | `id` (Path Variable) |
| POST   | `/impiegato/add`  | Aggiunge nuovo impiegato | Corpo `JSON` |
| DELETE | `/impiegato/{id}` | Elimina per ID            | `id` (Path Variable) |

---

## 🔐 Permesso
| Metodo | Endpoint           | Descrizione           | Parametri                           |
|--------|--------------------|-----------------------|-----------------------------|
| GET    | `/permesso/all`   | Elenca tutti            | -                           |
| GET    | `/permesso/{id}`  | Restituisce per ID       | `id` (Path Variable) |
| POST   | `/permesso/add`   | Aggiunge nuovo permesso | `nome` (Request Param) |
| DELETE | `/permesso/{id}`  | Elimina per ID            | `id` (Path Variable) |

---

## 🔑 Ruolo_Permesso
| Metodo | Endpoint                      | Descrizione           | Parametri                           |
|--------|------------------------------|-----------------------|-----------------------------|
| GET    | `/ruolo_permesso/all`       | Elenca tutte le relazioni | -                           |
| POST   | `/ruolo_permesso/add`       | Aggiunge nuova relazione | Corpo `JSON` |
| DELETE | `/ruolo_permesso/delete/{idRuoli}/{idPermessi}` | Elimina la relazione specificata | `idRuoli`, `idPermessi` (Path Variable) |

---

## 📅 Log_Evento
| Metodo | Endpoint           | Descrizione           | Parametri                           |
|--------|--------------------|-----------------------|-----------------------------|
| GET    | `/log_evento/all` | Elenca tutti gli eventi | -                           |
| GET    | `/log_evento/{id}`| Restituisce per ID       | `id` (Path Variable) |
| POST   | `/log_evento/add`| Aggiunge nuovo evento    | Corpo `JSON` |
| DELETE | `/log_evento/{id}`| Elimina per ID           | `id` (Path Variable) |
