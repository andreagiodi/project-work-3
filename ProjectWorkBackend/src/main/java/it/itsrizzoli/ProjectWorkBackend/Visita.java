package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Visita")
public class Visita implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_Referente")
    private Integer idReferente;

    @Column(name = "ID_prenotazione")
    private Integer idPrenotazione;

    @Column(name = "ID_motivazione")
    private Integer idMotivazione;

    public Visita() {
    }

    public Visita(Integer idReferente, Integer idPrenotazione, Integer idMotivazione) {
        this.idReferente = idReferente;
        this.idPrenotazione = idPrenotazione;
        this.idMotivazione = idMotivazione;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdReferente() {
        return idReferente;
    }

    public Integer getIdPrenotazione() {
        return idPrenotazione;
    }

    public Integer getIdMotivazione() {
        return idMotivazione;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdReferente(Integer idReferente) {
        this.idReferente = idReferente;
    }

    public void setIdPrenotazione(Integer idPrenotazione) {
        this.idPrenotazione = idPrenotazione;
    }

    public void setIdMotivazione(Integer idMotivazione) {
        this.idMotivazione = idMotivazione;
    }
}
