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

import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;

@RestController
@RequestMapping("/ospite")
public class OspiteController {

    @Autowired
    private OspiteRepository ospiteRepository;

    @GetMapping("/all")
    public Iterable<Ospite> getAll() {
        return ospiteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Ospite> getById(@PathVariable Integer id) {
        return ospiteRepository.findById(id);
    }

    @PostMapping("/add")
    public Ospite add(@RequestBody Ospite ospite) {
        return ospiteRepository.save(ospite);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        ospiteRepository.deleteById(id);
    }
}
