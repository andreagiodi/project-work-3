package it.itsrizzoli.ProjectWorkBackend;

public class Tipo_Ospite {
    private int ID;
    private String tipologia;

    public Tipo_Ospite(int ID, String tipologia) {
        this.ID = ID;
        this.tipologia = tipologia;
    }

    //GETTERS
    public int getID() {
        return ID;
    }

    public String getTipologia() {
        return tipologia;
    }

    //SETTERS
    public void setID(int ID) {
        this.ID = ID;
    }

    public void setTipologia(String tipologia) {
        this.tipologia = tipologia;
    }
    
}
