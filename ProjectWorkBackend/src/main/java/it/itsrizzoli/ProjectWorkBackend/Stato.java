package it.itsrizzoli.ProjectWorkBackend;

public class Stato {
    private int ID;
    private String nome;

    public Stato(int ID, String nome) {
        this.ID = ID;
        this.nome = nome;
    }

    //GETTERS
    public int getID() {
        return ID;
    }

    public String getNome() {
        return nome;
    }

    //SETTERS
    public void setID(int ID) {
        this.ID = ID;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
