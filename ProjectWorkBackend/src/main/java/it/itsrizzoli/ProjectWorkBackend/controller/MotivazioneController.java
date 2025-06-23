package it.itsrizzoli.ProjectWorkBackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Motivazione;
import it.itsrizzoli.ProjectWorkBackend.repository.MotivazioneRepository;

@RestController
@RequestMapping("/motivazione")
public class MotivazioneController {

    @Autowired
    private MotivazioneRepository motivazioneRepository;

    @GetMapping("/all")
    public Iterable<Motivazione> getAll() {
        return motivazioneRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Motivazione> getById(@PathVariable Integer id) {
        return motivazioneRepository.findById(id);
    }

    @PostMapping("/add")
    public Motivazione add(@RequestParam String tipologia) {
        Motivazione motivazione = new Motivazione();
        motivazione.setTipologia(tipologia);
        return motivazioneRepository.save(motivazione);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        motivazioneRepository.deleteById(id);
    }
}
