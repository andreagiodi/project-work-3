package it.itsrizzoli.ProjectWorkBackend;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Tipo_Ospite")
public class Tipo_Ospite implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "tipologia", nullable = false, length = 50)
    private String tipologia;

    public Tipo_Ospite() {
    }

    public Tipo_Ospite(String tipologia) {
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
