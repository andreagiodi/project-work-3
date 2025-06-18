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

}
