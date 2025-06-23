package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Impiegato")
public class Impiegato implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_ruolo")
    private Integer idRuolo;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "cognome", nullable = false, length = 100)
    private String cognome;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "isEsterno")
    private boolean isEsterno;

    public Impiegato() {
    }

    public Impiegato(Integer idRuolo, String nome, String cognome, String email, String password, boolean isEsterno) {
        this.idRuolo = idRuolo;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.isEsterno = isEsterno;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdRuolo() {
        return idRuolo;
    }

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public boolean isEsterno() {
        return isEsterno;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdRuolo(Integer idRuolo) {
        this.idRuolo = idRuolo;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEsterno(boolean esterno) {
        isEsterno = esterno;
    }
}
