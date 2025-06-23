package it.itsrizzoli.ProjectWorkBackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.repository.PrenotazioneRepository;

@RestController
@RequestMapping("/prenotazione")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @GetMapping("/all")
    public Iterable<Prenotazione> getAll() {
        return prenotazioneRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Prenotazione> getById(@PathVariable Integer id) {
        return prenotazioneRepository.findById(id);
    }

    @PostMapping("/add")
    public Prenotazione add(@RequestBody Prenotazione prenotazione) {
        return prenotazioneRepository.save(prenotazione);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        prenotazioneRepository.deleteById(id);
    }
}
