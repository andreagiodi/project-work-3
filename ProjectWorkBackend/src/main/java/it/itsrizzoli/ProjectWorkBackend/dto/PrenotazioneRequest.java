package it.itsrizzoli.ProjectWorkBackend.dto;

public class PrenotazioneRequest {
    private String data;
    private String ora;
    private String identificazioneProfessionale;
    private String motivoVisita;
    
    public PrenotazioneRequest() {}
    
    public PrenotazioneRequest(String data, String ora, String identificazioneProfessionale, String motivoVisita) {
        this.data = data;
        this.ora = ora;
        this.identificazioneProfessionale = identificazioneProfessionale;
        this.motivoVisita = motivoVisita;
    }
    
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
    
    public String getIdentificazioneProfessionale() {
        return identificazioneProfessionale;
    }
    
    public void setIdentificazioneProfessionale(String identificazioneProfessionale) {
        this.identificazioneProfessionale = identificazioneProfessionale;
    }
    
    public String getMotivoVisita() {
        return motivoVisita;
    }
    
    public void setMotivoVisita(String motivoVisita) {
        this.motivoVisita = motivoVisita;
    }
}