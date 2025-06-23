package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Log_Evento")
public class LogEvento implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_Ospite")
    private Integer idOspite;

    @Column(name = "ID_Impiegato")
    private Integer idImpiegato;

    @Column(name = "ID_motivazione")
    private Integer idMotivazione;

    @Column(name = "tipo_utente", length = 50)
    private String tipoUtente;

    @Column(name = "azione", length = 100)
    private String azione;

    @Column(name = "data")
    @Temporal(TemporalType.DATE)
    private Date data;

    @Column(name = "ora")
    private LocalTime ora;

    public LogEvento() {
    }

    public LogEvento(Integer idOspite, Integer idImpiegato, Integer idMotivazione, String tipoUtente, String azione, Date data, LocalTime ora) {
        this.idOspite = idOspite;
        this.idImpiegato = idImpiegato;
        this.idMotivazione = idMotivazione;
        this.tipoUtente = tipoUtente;
        this.azione = azione;
        this.data = data;
        this.ora = ora;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdOspite() {
        return idOspite;
    }

    public Integer getIdImpiegato() {
        return idImpiegato;
    }

    public Integer getIdMotivazione() {
        return idMotivazione;
    }

    public String getTipoUtente() {
        return tipoUtente;
    }

    public String getAzione() {
        return azione;
    }

    public Date getData() {
        return data;
    }

    public LocalTime getOra() {
        return ora;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdOspite(Integer idOspite) {
        this.idOspite = idOspite;
    }

    public void setIdImpiegato(Integer idImpiegato) {
        this.idImpiegato = idImpiegato;
    }

    public void setIdMotivazione(Integer idMotivazione) {
        this.idMotivazione = idMotivazione;
    }

    public void setTipoUtente(String tipoUtente) {
        this.tipoUtente = tipoUtente;
    }

    public void setAzione(String azione) {
        this.azione = azione;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public void setOra(LocalTime ora) {
        this.ora = ora;
    }
}
