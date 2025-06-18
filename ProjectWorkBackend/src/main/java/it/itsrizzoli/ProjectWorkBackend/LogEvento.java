package it.itsrizzoli.ProjectWorkBackend;

import java.util.Date;
import java.time.LocalTime;

public class LogEvento {
    private int ID;
    private Integer ID_Ospite; 
    private Integer ID_Impiegato; 
    private Integer ID_motivazione; 
    private String tipo_utente;
    private String azione;
    private Date data;
    private LocalTime ora;


    public LogEvento(int ID, Integer ID_Ospite, Integer ID_Impiegato, Integer ID_motivazione, String tipo_utente, String azione, Date data, LocalTime ora) {
        this.ID = ID;
        this.ID_Ospite = ID_Ospite;
        this.ID_Impiegato = ID_Impiegato;
        this.ID_motivazione = ID_motivazione;
        this.tipo_utente = tipo_utente;
        this.azione = azione;
        this.data = data;
        this.ora = ora;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public Integer getID_Ospite() {
        return ID_Ospite;
    }

    public void setID_Ospite(Integer ID_Ospite) {
        this.ID_Ospite = ID_Ospite;
    }

    public Integer getID_Impiegato() {
        return ID_Impiegato;
    }

    public void setID_Impiegato(Integer ID_Impiegato) {
        this.ID_Impiegato = ID_Impiegato;
    }

    public Integer getID_motivazione() {
        return ID_motivazione;
    }

    public void setID_motivazione(Integer ID_motivazione) {
        this.ID_motivazione = ID_motivazione;
    }

    public String getTipo_utente() {
        return tipo_utente;
    }

    public void setTipo_utente(String tipo_utente) {
        this.tipo_utente = tipo_utente;
    }

    public String getAzione() {
        return azione;
    }

    public void setAzione(String azione) {
        this.azione = azione;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public LocalTime getOra() {
        return ora;
    }

    public void setOra(LocalTime ora) {
        this.ora = ora;
    }    
    


} 
