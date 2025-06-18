package it.itsrizzoli.ProjectWorkBackend;

public class Ospite {
    private int ID;
    private int ID_Tipo_Ospite;
    private String nome;
    private String cognome;
    private String foto;
    private String telefono;
    private String email;
    private String codice_fiscale;
    private String azienda;
    private String password;
    private boolean attivo;

    public Ospite(int ID, int ID_Tipo_Ospite, String nome, String cognome, String foto, String telefono, String email, String codice_fiscale, String azienda, String password, boolean attivo) {
        this.ID = ID;
        this.ID_Tipo_Ospite = ID_Tipo_Ospite;
        this.nome = nome;
        this.cognome = cognome;
        this.foto = foto;
        this.telefono = telefono;
        this.email = email;
        this.codice_fiscale = codice_fiscale;
        this.azienda = azienda;
        this.password = password;
        this.attivo = attivo;
    }

    //GETTERS
    public int getID() {
        return ID;
    }

    public int getID_Tipo_Ospite() {
        return ID_Tipo_Ospite;
    }

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public String getFoto() {
        return foto;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getEmail() {
        return email;
    }

    public String getCodice_fiscale() {
        return codice_fiscale;
    }

    public String getAzienda() {
        return azienda;
    }

    public String getPassword() {
        return password;
    }

    public boolean isAttivo() {
        return attivo;
    }

    //SETTERS
    public void setID(int ID) {
        this.ID = ID;
    }

    public void setID_Tipo_Ospite(int ID_Tipo_Ospite) {
        this.ID_Tipo_Ospite = ID_Tipo_Ospite;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCodice_fiscale(String codice_fiscale) {
        this.codice_fiscale = codice_fiscale;
    }

    public void setAzienda(String azienda) {
        this.azienda = azienda;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAttivo(boolean attivo) {
        this.attivo = attivo;
    }

}
