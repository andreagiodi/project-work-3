package it.itsrizzoli.ProjectWorkBackend.dto;

public class SetRuoloRequest {
    private Integer idRuolo;
    
    public SetRuoloRequest() {}

    public SetRuoloRequest(Integer idRuolo) {
        this.idRuolo = idRuolo;
    }

    public Integer getIdRuolo() {
        return idRuolo;
    }

    public void setIdRuolo(Integer idRuolo) {
        this.idRuolo = idRuolo;
    }
}