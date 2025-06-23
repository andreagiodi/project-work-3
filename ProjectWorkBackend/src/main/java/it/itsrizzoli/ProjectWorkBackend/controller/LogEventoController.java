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

import it.itsrizzoli.ProjectWorkBackend.LogEvento;
import it.itsrizzoli.ProjectWorkBackend.repository.LogEventoRepository;

@RestController
@RequestMapping("/log_evento")
public class LogEventoController {

    @Autowired
    private LogEventoRepository logEventoRepository;

    @GetMapping("/all")
    public Iterable<LogEvento> getAll() {
        return logEventoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<LogEvento> getById(@PathVariable Integer id) {
        return logEventoRepository.findById(id);
    }

    @PostMapping("/add")
    public LogEvento add(@RequestBody LogEvento logEvento) {
        return logEventoRepository.save(logEvento);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        logEventoRepository.deleteById(id);
    }
}
