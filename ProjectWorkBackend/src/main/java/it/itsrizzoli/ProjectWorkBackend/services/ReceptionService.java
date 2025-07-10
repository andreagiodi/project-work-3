package it.itsrizzoli.ProjectWorkBackend.services;

import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ReceptionService {

    @Autowired
    private OspiteRepository ospiteRepository;

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Ospite registraIngresso(Ospite ospite) {
        Ospite savedOspite = ospiteRepository.save(ospite);

        Prenotazione prenotazione = new Prenotazione();
        prenotazione.setIdOspite(savedOspite.getId());
        prenotazione.setEntrata(LocalDateTime.now());
        prenotazione.setStato(1);
        prenotazioneRepository.save(prenotazione);

        return savedOspite;
    }

    public boolean registraUscita(Integer idOspite) {
        Iterable<Prenotazione> prenotazioni = prenotazioneRepository.findByIdOspite(idOspite);
        for (Prenotazione p : prenotazioni) {
            if (p.getStato() != null && p.getStato() == 1 && p.getUscita() == null) {
                p.setUscita(LocalDateTime.now());
                p.setStato(2);
                prenotazioneRepository.save(p);
                return true;
            }
        }
        return false;
    }

    public boolean segnaNonPresentato(Integer idOspite) {
        Iterable<Prenotazione> prenotazioni = prenotazioneRepository.findByIdOspite(idOspite);
        for (Prenotazione p : prenotazioni) {
            if (p.getStato() != null && p.getStato() == 1 && p.getUscita() == null) {
                p.setStato(3); // 3 = non presentato
                prenotazioneRepository.save(p);
                return true;
            }
        }
        return false;
    }

    public List<Ospite> getOspitiPresenti() {
        Iterable<Prenotazione> tutte = prenotazioneRepository.findAll();
        List<Integer> idOspitiPresenti = StreamSupport.stream(tutte.spliterator(), false)
                .filter(p -> p.getStato() != null && p.getStato() == 1 && p.getUscita() == null)
                .map(Prenotazione::getIdOspite)
                .distinct()
                .collect(Collectors.toList());
        return StreamSupport.stream(ospiteRepository.findAll().spliterator(), false)
                .filter(o -> idOspitiPresenti.contains(o.getId()))
                .collect(Collectors.toList());
    }
}