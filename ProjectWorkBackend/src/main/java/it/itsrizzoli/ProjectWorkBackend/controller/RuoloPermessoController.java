package it.itsrizzoli.ProjectWorkBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Ruolo_Permesso;
import it.itsrizzoli.ProjectWorkBackend.repository.RuoloPermessoRepository;

@RestController
@RequestMapping("/ruolo_permesso")
public class RuoloPermessoController {

    @Autowired
    private RuoloPermessoRepository ruoloPermessoRepository;

    @GetMapping("/all")
    public Iterable<Ruolo_Permesso> getAll() {
        return ruoloPermessoRepository.findAll();
    }

    @PostMapping("/add")
    public Ruolo_Permesso add(@RequestBody Ruolo_Permesso ruoloPermesso) {
        return ruoloPermessoRepository.save(ruoloPermesso);
    }

    @DeleteMapping("/delete/{idRuoli}/{idPermessi}")
    public void delete(@PathVariable Integer idRuoli, @PathVariable Integer idPermessi) {
        ruoloPermessoRepository.deleteById(new Ruolo_Permesso.RuoloPermessoId(idRuoli, idPermessi));
    }
}
