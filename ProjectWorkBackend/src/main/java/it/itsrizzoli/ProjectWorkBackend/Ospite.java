package it.itsrizzoli.ProjectWorkBackend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Ospite")
public class Ospite implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "ID_tipo_ospite")
    private Integer idTipoOspite;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "cognome", nullable = false, length = 100)
    private String cognome;

    @Column(name = "foto", columnDefinition = "TEXT")
    private String foto;

    @Column(name = "telefono", length = 20)
    private String telefono;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "codice_fiscale", length = 16)
    private String codiceFiscale;

    @Column(name = "azienda", length = 100)
    private String azienda;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "attivo")
    private boolean attivo;

    public Ospite() {
    }

    public Ospite(Integer idTipoOspite, String nome, String cognome, String foto,
                  String telefono, String email, String codiceFiscale,
                  String azienda, String password, boolean attivo) {
        this.idTipoOspite = idTipoOspite;
        this.nome = nome;
        this.cognome = cognome;
        this.foto = foto;
        this.telefono = telefono;
        this.email = email;
        this.codiceFiscale = codiceFiscale;
        this.azienda = azienda;
        this.password = password;
        this.attivo = attivo;
    }

    // GETTERS e SETTERS
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdTipoOspite() {
        return idTipoOspite;
    }

    public void setIdTipoOspite(Integer idTipoOspite) {
        this.idTipoOspite = idTipoOspite;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCodiceFiscale() {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale) {
        this.codiceFiscale = codiceFiscale;
    }

    public String getAzienda() {
        return azienda;
    }

    public void setAzienda(String azienda) {
        this.azienda = azienda;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAttivo() {
        return attivo;
    }

    public void setAttivo(boolean attivo) {
        this.attivo = attivo;
    }
}
