package it.itsrizzoli.ProjectWorkBackend;

import java.util.Date;
import java.time.LocalTime;

public class LogEvento {
    private int ID;
    private Integer ID_Ospite; 
    private Integer ID_Impiegato; 
    private Integer ID_motivazione; 
    private String tipo_utente;
    private String azione;
    private Date data;
    private LocalTime ora;


    public LogEvento(int ID, Integer ID_Ospite, Integer ID_Impiegato, Integer ID_motivazione, String tipo_utente, String azione, Date data, LocalTime ora) {
        this.ID = ID;
        this.ID_Ospite = ID_Ospite;
        this.ID_Impiegato = ID_Impiegato;
        this.ID_motivazione = ID_motivazione;
        this.tipo_utente = tipo_utente;
        this.azione = azione;
        this.data = data;
        this.ora = ora;
    }


} 
