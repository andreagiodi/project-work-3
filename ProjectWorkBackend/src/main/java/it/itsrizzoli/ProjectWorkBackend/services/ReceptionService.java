package it.itsrizzoli.ProjectWorkBackend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.PrenotazioneRepository;

@Service
public class ReceptionService {

    @Autowired
    private OspiteRepository ospiteRepository;

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Prenotazione registraIngresso(Integer idPrenotazione) {
        Prenotazione prenotazione = prenotazioneRepository.findById(idPrenotazione).orElse(null);
        if (prenotazione == null) return null;

        Ospite ospite = ospiteRepository.findById(prenotazione.getIdOspite()).orElse(null);
        if (ospite == null) return null;

        prenotazione.setEntrata(LocalDateTime.now());
        prenotazioneRepository.save(prenotazione);

        return prenotazione;
    }

    public Prenotazione registraUscita(Integer idPrenotazione) {
        Prenotazione prenotazione = prenotazioneRepository.findById(idPrenotazione).orElse(null);
        if (prenotazione == null) return null;

        prenotazione.setUscita(LocalDateTime.now());
        prenotazioneRepository.save(prenotazione);

        return prenotazione;
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
