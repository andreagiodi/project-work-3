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

import it.itsrizzoli.ProjectWorkBackend.Visita;
import it.itsrizzoli.ProjectWorkBackend.repository.VisitaRepository;

@RestController
@RequestMapping("/visita")
public class VisitaController {

    @Autowired
    private VisitaRepository visitaRepository;

    @GetMapping("/all")
    public Iterable<Visita> getAll() {
        return visitaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Visita> getById(@PathVariable Integer id) {
        return visitaRepository.findById(id);
    }

    @PostMapping("/add")
    public Visita add(@RequestBody Visita visita) {
        return visitaRepository.save(visita);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        visitaRepository.deleteById(id);
    }
}
