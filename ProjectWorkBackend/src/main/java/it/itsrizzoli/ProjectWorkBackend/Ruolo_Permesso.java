package it.itsrizzoli.ProjectWorkBackend;

public class Ruolo_Permesso {
    private int idRuoli;
    private int idPermessi;

    public Ruolo_Permesso(int idRuoli, int idPermessi) {
        this.idRuoli = idRuoli;
        this.idPermessi = idPermessi;
    }  
    
      public int getIdRuoli() {
        return idRuoli;
    }

    public void setIdRuoli(int idRuoli) {
        this.idRuoli = idRuoli;
    }

    public int getIdPermessi() {
        return idPermessi;
    }

    public void setIdPermessi(int idPermessi) {
        this.idPermessi = idPermessi;
    }
}
