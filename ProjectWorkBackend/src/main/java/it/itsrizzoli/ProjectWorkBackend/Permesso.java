package it.itsrizzoli.ProjectWorkBackend;

public class Permesso {
    private int ID;
    private String nome;

    public Permesso(int ID, String nome) {
        this.ID = ID;
        this.nome = nome;
    }    

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
