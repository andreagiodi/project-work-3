package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Prenotazione")
public class Prenotazione implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_Ospite")
    private Integer idOspite;

    @Column(name = "stato")
    private Integer stato;

    @Column(name = "entrata")
    private LocalDateTime entrata;

    @Column(name = "uscita")
    private LocalDateTime uscita;

    @Column(name = "identificazione_professionale", length = 100)
    private String identificazioneProfessionale;

    @Column(name = "motivo", length = 255)
    private String motivo;

    public Prenotazione() {
    }

    public Prenotazione(Integer idOspite, Integer stato, LocalDateTime entrata, LocalDateTime uscita,
                        String identificazioneProfessionale, String motivo) {
        this.idOspite = idOspite;
        this.stato = stato;
        this.entrata = entrata;
        this.uscita = uscita;
        this.identificazioneProfessionale = identificazioneProfessionale;
        this.motivo = motivo;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdOspite() {
        return idOspite;
    }

    public Integer getStato() {
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

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdOspite(Integer idOspite) {
        this.idOspite = idOspite;
    }

    public void setStato(Integer stato) {
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
