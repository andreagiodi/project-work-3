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

import it.itsrizzoli.ProjectWorkBackend.Permesso;
import it.itsrizzoli.ProjectWorkBackend.repository.PermessoRepository;

@RestController
@RequestMapping("/permesso")
public class PermessoController {

    @Autowired
    private PermessoRepository permessoRepository;

    @GetMapping("/all")
    public Iterable<Permesso> getAll() {
        return permessoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Permesso> getById(@PathVariable Integer id) {
        return permessoRepository.findById(id);
    }

    @PostMapping("/add")
    public Permesso add(@RequestParam String nome) {
        Permesso permesso = new Permesso();
        permesso.setNome(nome);
        return permessoRepository.save(permesso);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        permessoRepository.deleteById(id);
    }
}
