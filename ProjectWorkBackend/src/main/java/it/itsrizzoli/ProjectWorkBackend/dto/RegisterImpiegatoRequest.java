package it.itsrizzoli.ProjectWorkBackend.dto;

public class RegisterImpiegatoRequest {
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private Integer idRuolo;
    private boolean isEsterno;

    // Constructors
    public RegisterImpiegatoRequest() {}

    public RegisterImpiegatoRequest(String nome, String cognome, String email, String password, 
                                   Integer idRuolo, boolean isEsterno) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.idRuolo = idRuolo;
        this.isEsterno = isEsterno;
    }

    // Getters and Setters
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIdRuolo() {
        return idRuolo;
    }

    public void setIdRuolo(Integer idRuolo) {
        this.idRuolo = idRuolo;
    }

    public boolean isEsterno() {
        return isEsterno;
    }

    public void setEsterno(boolean esterno) {
        isEsterno = esterno;
    }
}