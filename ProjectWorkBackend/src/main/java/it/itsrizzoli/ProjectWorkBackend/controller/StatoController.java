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

import it.itsrizzoli.ProjectWorkBackend.Stato;
import it.itsrizzoli.ProjectWorkBackend.repository.StatoRepository;

@RestController
@RequestMapping("/stato")
public class StatoController {

    @Autowired
    private StatoRepository statoRepository;

    @GetMapping("/all")
    public Iterable<Stato> getAll() {
        return statoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Stato> getById(@PathVariable Integer id) {
        return statoRepository.findById(id);
    }

    @PostMapping("/add")
    public Stato add(@RequestParam String nome) {
        Stato stato = new Stato();
        stato.setNome(nome);
        return statoRepository.save(stato);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        statoRepository.deleteById(id);
    }
}
