package it.itsrizzoli.ProjectWorkBackend;

public class Ruolo {

    // Attributi

    private int id;
    private String nome;

    // Costruttore

    public Ruolo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    // Getter

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    // Setter

    public void setId(int id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}