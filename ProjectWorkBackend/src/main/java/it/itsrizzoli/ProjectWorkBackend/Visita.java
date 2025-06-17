package it.itsrizzoli.ProjectWorkBackend;

import java.time.LocalDate;
import java.time.LocalTime;

public class Visita {
    private int id;
    private int idUtenteEsterno;
    private int idReferente;
    private LocalDate data;
    private LocalTime ora;
    private LocalTime entrata;
    private LocalTime uscita;
    private String identificazioneProfessionale;
    private String motivo;
    private String stato;
}
