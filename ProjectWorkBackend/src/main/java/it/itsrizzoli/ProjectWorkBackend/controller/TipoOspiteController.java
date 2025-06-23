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

import it.itsrizzoli.ProjectWorkBackend.Tipo_Ospite;
import it.itsrizzoli.ProjectWorkBackend.repository.TipoOspiteRepository;

@RestController
@RequestMapping("/tipo_ospite")
public class TipoOspiteController {

    @Autowired
    private TipoOspiteRepository tipoOspiteRepository;

    @GetMapping("/all")
    public Iterable<Tipo_Ospite> getAll() {
        return tipoOspiteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Tipo_Ospite> getById(@PathVariable Integer id) {
        return tipoOspiteRepository.findById(id);
    }

    @PostMapping("/add")
    public Tipo_Ospite add(@RequestParam String tipologia) {
        Tipo_Ospite tipo = new Tipo_Ospite();
        tipo.setTipologia(tipologia);
        return tipoOspiteRepository.save(tipo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        tipoOspiteRepository.deleteById(id);
    }
}
