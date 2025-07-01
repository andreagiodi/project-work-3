package it.itsrizzoli.ProjectWorkBackend.dto;

public class RegisterOspiteRequest {
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private String telefono;
    private String codiceFiscale;
    private String azienda;
    private Integer idTipoOspite;

    // Constructors
    public RegisterOspiteRequest() {}

    public RegisterOspiteRequest(String nome, String cognome, String email, String password, 
                                String telefono, String codiceFiscale, String azienda, Integer idTipoOspite) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.codiceFiscale = codiceFiscale;
        this.azienda = azienda;
        this.idTipoOspite = idTipoOspite;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
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

    public Integer getIdTipoOspite() {
        return idTipoOspite;
    }

    public void setIdTipoOspite(Integer idTipoOspite) {
        this.idTipoOspite = idTipoOspite;
    }
}