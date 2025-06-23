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

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.repository.ImpiegatoRepository;

@RestController
@RequestMapping("/impiegato")
public class ImpiegatoController {

    @Autowired
    private ImpiegatoRepository impiegatoRepository;

    @GetMapping("/all")
    public Iterable<Impiegato> getAll() {
        return impiegatoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Impiegato> getById(@PathVariable Integer id) {
        return impiegatoRepository.findById(id);
    }

    @PostMapping("/add")
    public Impiegato add(@RequestBody Impiegato impiegato) {
        return impiegatoRepository.save(impiegato);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        impiegatoRepository.deleteById(id);
    }
}
