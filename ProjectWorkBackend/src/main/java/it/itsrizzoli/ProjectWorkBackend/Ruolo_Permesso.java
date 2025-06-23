package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "Ruolo_Permesso")
@IdClass(Ruolo_Permesso.RuoloPermessoId.class)
public class Ruolo_Permesso implements Serializable {

    @Id
    @Column(name = "ID_Ruoli")
    private Integer idRuoli;

    @Id
    @Column(name = "ID_Permessi")
    private Integer idPermessi;

    public Ruolo_Permesso() {
    }

    public Ruolo_Permesso(Integer idRuoli, Integer idPermessi) {
        this.idRuoli = idRuoli;
        this.idPermessi = idPermessi;
    }

    public Integer getIdRuoli() {
        return idRuoli;
    }

    public void setIdRuoli(Integer idRuoli) {
        this.idRuoli = idRuoli;
    }

    public Integer getIdPermessi() {
        return idPermessi;
    }

    public void setIdPermessi(Integer idPermessi) {
        this.idPermessi = idPermessi;
    }

    public static class RuoloPermessoId implements Serializable {
        private Integer idRuoli;
        private Integer idPermessi;

        public RuoloPermessoId() {
        }

        public RuoloPermessoId(Integer idRuoli, Integer idPermessi) {
            this.idRuoli = idRuoli;
            this.idPermessi = idPermessi;
        }
    }
}
