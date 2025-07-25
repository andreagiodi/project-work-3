package it.itsrizzoli.ProjectWorkBackend.services;

import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.Stato;
import it.itsrizzoli.ProjectWorkBackend.Visita;
import it.itsrizzoli.ProjectWorkBackend.dto.ModificaPrenotazioneRequest;
import it.itsrizzoli.ProjectWorkBackend.repository.PrenotazioneRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.StatoRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.VisitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReferenteService {

    @Autowired
    private VisitaRepository visitaRepository;

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private StatoRepository statoRepository;

    // Ottiene la lista di tutte le prenotazioni associate al referente .
    public List<Prenotazione> getPrenotazioniPerReferente(Integer idReferente) {
        List<Visita> visite = visitaRepository.findByIdReferente(idReferente);

        if (visite.isEmpty()) {
            return List.of();
        }

        List<Integer> idPrenotazioni = visite.stream()
                .map(Visita::getIdPrenotazione)
                .collect(Collectors.toList());

        return prenotazioneRepository.findAllById(idPrenotazioni);
    }

    // Approva/rifiuta una prenotazione
    public Prenotazione aggiornaStatoPrenotazione(Integer idPrenotazione, Integer idUtenteAutenticato,
            String nuovoStatoNome) {
        Visita visita = visitaRepository.findByIdPrenotazione(idPrenotazione)
                .orElseThrow(
                        () -> new RuntimeException("Visita non trovata per la prenotazione con ID: " + idPrenotazione));

        Prenotazione prenotazione = prenotazioneRepository.findById(idPrenotazione)
                .orElseThrow(() -> new RuntimeException("Prenotazione non trovata con ID: " + idPrenotazione));

        Stato nuovoStato = statoRepository.findByNome(nuovoStatoNome)
                .orElseThrow(() -> new RuntimeException("Stato non valido: " + nuovoStatoNome));

        prenotazione.setStato(nuovoStato.getId());

        return prenotazioneRepository.save(prenotazione);
    }

    // Modifica l'orario di una prenotazione esistente
    public Prenotazione modificaOrarioPrenotazione(Integer idPrenotazione, Integer idUtenteAutenticato,
            ModificaPrenotazioneRequest request) {

        Visita visita = visitaRepository.findByIdPrenotazione(idPrenotazione)
                .orElseThrow(
                        () -> new RuntimeException("Visita non trovata per la prenotazione con ID: " + idPrenotazione));

        if (!visita.getIdReferente().equals(idUtenteAutenticato)) {
            throw new SecurityException("Accesso negato: non sei il referente autorizzato per questa visita.");
        }

        Prenotazione prenotazione = prenotazioneRepository.findById(idPrenotazione)
                .orElseThrow(() -> new RuntimeException("Prenotazione non trovata con ID: " + idPrenotazione));

        LocalDate data = LocalDate.parse(request.getData());
        LocalTime ora = LocalTime.parse(request.getOra());
        LocalDateTime nuovaDataPrenotazione = LocalDateTime.of(data, ora);

        prenotazione.setDataPrenotazione(nuovaDataPrenotazione);

        return prenotazioneRepository.save(prenotazione);
    }
}
