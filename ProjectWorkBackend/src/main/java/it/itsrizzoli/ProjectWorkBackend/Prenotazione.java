package it.itsrizzoli.ProjectWorkBackend;

import java.time.LocalDateTime;

public class Prenotazione {

    // Attributi

    private int id;
    private int idOspite; 
    private int stato;    
    private LocalDateTime entrata;
    private LocalDateTime uscita;
    private String identificazioneProfessionale; 
    private String motivo;

    // Costruttore

    public Prenotazione(int idOspite, int stato, LocalDateTime entrata, LocalDateTime uscita,
                         String identificazioneProfessionale, String motivo) {
        this.idOspite = idOspite;
        this.stato = stato;
        this.entrata = entrata;
        this.uscita = uscita;
        this.identificazioneProfessionale = identificazioneProfessionale;
        this.motivo = motivo;
    }

    // Getters

    public int getId() {
        return id;
    }

    public int getIdOspite() {
        return idOspite;
    }

    public int getStato() {
        return stato;
    }

    public LocalDateTime getEntrata() {
        return entrata;
    }

    public LocalDateTime getUscita() {
        return uscita;
    }

    public String getIdentificazioneProfessionale() {
        return identificazioneProfessionale;
    }

    public String getMotivo() {
        return motivo;
    }

    // Setters

    public void setId(int id) {
        this.id = id;
    }

    public void setIdOspite(int idOspite) {
        this.idOspite = idOspite;
    }

    public void setStato(int stato) {
        this.stato = stato;
    }

    public void setEntrata(LocalDateTime entrata) {
        this.entrata = entrata;
    }

    public void setUscita(LocalDateTime uscita) {
        this.uscita = uscita;
    }

    public void setIdentificazioneProfessionale(String identificazioneProfessionale) {
        this.identificazioneProfessionale = identificazioneProfessionale;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }
}