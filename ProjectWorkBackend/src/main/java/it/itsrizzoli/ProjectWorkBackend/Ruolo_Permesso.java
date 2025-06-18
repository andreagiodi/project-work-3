package it.itsrizzoli.ProjectWorkBackend;

public class Ruolo_Permesso {
    private int ID_Ruoli;
    private int ID_Permessi;

    public Ruolo_Permesso(int ID_Ruoli, int ID_Permessi) {
        this.ID_Ruoli = ID_Ruoli;
        this.ID_Permessi = ID_Permessi;
    }  
    
      public int getID_Ruoli() {
        return ID_Ruoli;
    }

    public void setID_Ruoli(int ID_Ruoli) {
        this.ID_Ruoli = ID_Ruoli;
    }

    public int getID_Permessi() {
        return ID_Permessi;
    }

    public void setID_Permessi(int ID_Permessi) {
        this.ID_Permessi = ID_Permessi;
    }
}
