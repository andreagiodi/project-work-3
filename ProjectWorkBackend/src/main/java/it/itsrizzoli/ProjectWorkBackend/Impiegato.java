
package it.itsrizzoli.ProjectWorkBackend;

public class Impiegato {
    private int id;
    private int idRuolo;
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private boolean isEsterno;

    // Costruttore completo
    public Impiegato(int id, int idRuolo, String nome, String cognome, String email, String password, boolean isEsterno) {
        this.id = id;
        this.idRuolo = idRuolo;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.isEsterno = isEsterno;
    }

    // Getter e Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdRuolo() {
        return idRuolo;
    }

    public void setIdRuolo(int idRuolo) {
        this.idRuolo = idRuolo;
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

    public boolean isEsterno() {
        return isEsterno;
    }

    public void setEsterno(boolean isEsterno) {
        this.isEsterno = isEsterno;
    }
}


