package it.itsrizzoli.ProjectWorkBackend.dto;

public class ModificaPrenotazioneRequest {
    private String data;
    private String ora;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getOra() {
        return ora;
    }

    public void setOra(String ora) {
        this.ora = ora;
    }
}