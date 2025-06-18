package it.itsrizzoli.ProjectWorkBackend;

public class Visita {

    // Attributi

    private int id;
    private int idReferente;
    private int idPrenotazione;
    private int idMotivazione;

    // Construttore

    public Visita(int id, int idReferente, int idPrenotazione, int idMotivazione) {
        this.id = id;
        this.idReferente = idReferente;
        this.idPrenotazione = idPrenotazione;
        this.idMotivazione = idMotivazione;
    }

    // Getters
    
    public int getId() {
        return id;
    }

    public int getIdReferente() {
        return idReferente;
    }

    public int getIdPrenotazione() {
        return idPrenotazione;
    }

    public int getIdMotivazione() {
        return idMotivazione;
    }

    // Setters

    public void setId(int id) {
        this.id = id;
    }

    public void setIdReferente(int idReferente) {
        this.idReferente = idReferente;
    }

    public void setIdPrenotazione(int idPrenotazione) {
        this.idPrenotazione = idPrenotazione;
    }

    public void setIdMotivazione(int idMotivazione) {
        this.idMotivazione = idMotivazione;
    }
}
