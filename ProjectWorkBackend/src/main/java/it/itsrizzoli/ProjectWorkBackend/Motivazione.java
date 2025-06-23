package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Motivazione")
public class Motivazione implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "tipologia", nullable = false, length = 100)
    private String tipologia;

    public Motivazione() {
    }

    public Motivazione(String tipologia) {
        this.tipologia = tipologia;
    }

    public Integer getId() {
        return id;
    }

    public String getTipologia() {
        return tipologia;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTipologia(String tipologia) {
        this.tipologia = tipologia;
    }
}
