package it.itsrizzoli.ProjectWorkBackend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CookieValue;
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

    // Aggiungi questa istanza di BCryptPasswordEncoder
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

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

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Ospite ospite) {
        if (ospiteRepository.existsByEmail(ospite.getEmail())) {
            return ResponseEntity.badRequest()
                    .body("Email già registrata");
        }

        ospite.setPassword(passwordEncoder.encode(ospite.getPassword()));
        Ospite nuovoOspite = ospiteRepository.save(ospite);
        nuovoOspite.setPassword(null);

        return ResponseEntity.ok(nuovoOspite);
    }

    

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@CookieValue(value = "ospite_id", required = false) String ospiteId) {
        if (ospiteId == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        try {
            Integer id = Integer.parseInt(ospiteId);
            Optional<Ospite> ospiteOpt = ospiteRepository.findById(id);

            if (ospiteOpt.isEmpty()) {
                return ResponseEntity.status(401).body("Sessione non valida");
            }

            Ospite ospite = ospiteOpt.get();
            ospite.setPassword(null);
            return ResponseEntity.ok(ospite);
        } catch (NumberFormatException e) {
            return ResponseEntity.status(401).body("Cookie non valido");
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        ospiteRepository.deleteById(id);
    }

    //utility routes
    @GetMapping("/migrate-passwords")
    public ResponseEntity<?> migratePasswords() {
        Iterable<Ospite> ospiti = ospiteRepository.findAll();

        for (Ospite ospite : ospiti) {
            String plainPassword = ospite.getPassword();

            if (plainPassword != null && !plainPassword.startsWith("$2a$")) {
                ospite.setPassword(passwordEncoder.encode(plainPassword));
                ospiteRepository.save(ospite);
            }
        }

        return ResponseEntity.ok("Password migrate con successo");
    }
}
