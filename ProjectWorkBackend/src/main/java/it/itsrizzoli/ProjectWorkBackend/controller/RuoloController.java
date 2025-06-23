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

import it.itsrizzoli.ProjectWorkBackend.Ruolo;
import it.itsrizzoli.ProjectWorkBackend.repository.RuoloRepository;

@RestController
@RequestMapping("/ruolo")
public class RuoloController {

    @Autowired
    private RuoloRepository ruoloRepository;

    @GetMapping("/all")
    public Iterable<Ruolo> getAll() {
        return ruoloRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Ruolo> getById(@PathVariable Integer id) {
        return ruoloRepository.findById(id);
    }

    @PostMapping("/add")
    public Ruolo add(@RequestParam String nome) {
        Ruolo ruolo = new Ruolo();
        ruolo.setNome(nome);
        return ruoloRepository.save(ruolo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        ruoloRepository.deleteById(id);
    }
}
