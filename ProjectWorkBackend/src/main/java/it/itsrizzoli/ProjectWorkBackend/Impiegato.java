
package it.itsrizzoli.ProjectWorkBackend;

public class Impiegato {
    private int ID;
    private int ID_Ruolo;
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private boolean isEsterno;

    // Costruttore completo
    public Impiegato(int ID, int ID_Ruolo, String nome, String cognome, String email, String password, boolean isEsterno) {
        this.ID = ID;
        this.ID_Ruolo = ID_Ruolo;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.isEsterno = isEsterno;
    }

    // Getter e Setter
    public int getID() {
        return ID;
    }

    public void setId(int ID) {
        this.ID = ID;
    }

    public int getID_Ruolo() {
        return ID_Ruolo;
    }

    public void setID_Ruolo(int ID_Ruolo) {
        this.ID_Ruolo = ID_Ruolo;
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


