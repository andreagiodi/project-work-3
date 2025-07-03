package it.itsrizzoli.ProjectWorkBackend.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.dto.PrenotazioneRequest;
import it.itsrizzoli.ProjectWorkBackend.repository.PrenotazioneRepository;
import it.itsrizzoli.ProjectWorkBackend.services.AuthService;

@RestController
@RequestMapping("/prenotazione")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private AuthService authService;

    @PostMapping("/create")
    public ResponseEntity<?> createPrenotazione(
            @RequestBody PrenotazioneRequest request,
            @CookieValue(value = "auth_token", required = false) String token) {

        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);

        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        if (!user.isOspite()) {
            return ResponseEntity.status(403).body("Solo gli ospiti possono creare prenotazioni");
        }

        try {
            Prenotazione prenotazione = new Prenotazione();
            prenotazione.setIdOspite(user.getUserId());
            prenotazione.setStato(0);

            LocalDate data = LocalDate.parse(request.getData());
            LocalTime ora = LocalTime.parse(request.getOra());
            LocalDateTime entrata = LocalDateTime.of(data, ora);

            prenotazione.setEntrata(entrata);
            prenotazione.setUscita(null);
            prenotazione.setIdentificazioneProfessionale(request.getIdentificazioneProfessionale());
            prenotazione.setMotivo(request.getMotivoVisita());
            prenotazione.setDataPrenotazione(LocalDateTime.now());


            Prenotazione saved = prenotazioneRepository.save(prenotazione);

            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(500).body("Errore durante la creazione della prenotazione: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public Iterable<Prenotazione> getAll() {
        return prenotazioneRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Prenotazione> getById(@PathVariable Integer id) {
        return prenotazioneRepository.findById(id);
    }

    @PostMapping("/add")
    public Prenotazione add(@RequestBody Prenotazione prenotazione) {
        return prenotazioneRepository.save(prenotazione);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        prenotazioneRepository.deleteById(id);
    }
}
