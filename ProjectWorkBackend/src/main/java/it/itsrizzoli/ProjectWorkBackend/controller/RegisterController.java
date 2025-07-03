package it.itsrizzoli.ProjectWorkBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.dto.RegisterImpiegatoRequest;
import it.itsrizzoli.ProjectWorkBackend.dto.RegisterOspiteRequest;
import it.itsrizzoli.ProjectWorkBackend.repository.ImpiegatoRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;

@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private OspiteRepository ospiteRepository;

    @Autowired
    private ImpiegatoRepository impiegatoRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/ospite")
    public ResponseEntity<?> registerOspite(@RequestBody RegisterOspiteRequest request) {
        // Validazioni input
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Email è obbligatoria");
        }

        if (request.getPassword() == null || request.getPassword().length() < 6) {
            return ResponseEntity.badRequest().body("Password deve essere di almeno 6 caratteri");
        }

        if (request.getNome() == null || request.getNome().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Nome è obbligatorio");
        }

        if (request.getCognome() == null || request.getCognome().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Cognome è obbligatorio");
        }

        // Verifica se email già esistente
        if (ospiteRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email già registrata");
        }

        // Verifica se email già usata da un impiegato
        if (impiegatoRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email già in uso");
        }

        try {
            // Crea nuovo ospite
            Ospite nuovoOspite = new Ospite();
            nuovoOspite.setNome(request.getNome());
            nuovoOspite.setCognome(request.getCognome());
            nuovoOspite.setEmail(request.getEmail());
            nuovoOspite.setTelefono(request.getTelefono());
            nuovoOspite.setCodiceFiscale(request.getCodiceFiscale());
            nuovoOspite.setAzienda(request.getAzienda());
            nuovoOspite.setIdTipoOspite(request.getIdTipoOspite());
            nuovoOspite.setAttivo(true); // Attivo di default
            
            // Cripta la password
            nuovoOspite.setPassword(passwordEncoder.encode(request.getPassword()));

            // Salva nel database
            Ospite ospiteSalvato = ospiteRepository.save(nuovoOspite);

            // Rimuovi la password dalla risposta
            ospiteSalvato.setPassword(null);

            return ResponseEntity.ok(ospiteSalvato);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Errore durante la registrazione: " + e.getMessage());
        }
    }

    @PostMapping("/staff")
    public ResponseEntity<?> registerImpiegato(@RequestBody RegisterImpiegatoRequest request) {
        // Validazioni input
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Email è obbligatoria");
        }

        if (request.getPassword() == null || request.getPassword().length() < 6) {
            return ResponseEntity.badRequest().body("Password deve essere di almeno 6 caratteri");
        }

        if (request.getNome() == null || request.getNome().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Nome è obbligatorio");
        }

        if (request.getCognome() == null || request.getCognome().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Cognome è obbligatorio");
        }

        // Verifica se email già esistente
        if (impiegatoRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email già registrata");
        }

        // Verifica se email già usata da un ospite
        if (ospiteRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email già in uso");
        }

        try {
            // Crea nuovo impiegato
            Impiegato nuovoImpiegato = new Impiegato();
            nuovoImpiegato.setNome(request.getNome());
            nuovoImpiegato.setCognome(request.getCognome());
            nuovoImpiegato.setEmail(request.getEmail());
            nuovoImpiegato.setIdRuolo(request.getIdRuolo());
            nuovoImpiegato.setEsterno(request.isEsterno());
            
            // Cripta la password
            nuovoImpiegato.setPassword(passwordEncoder.encode(request.getPassword()));

            // Salva nel database
            Impiegato impiegatoSalvato = impiegatoRepository.save(nuovoImpiegato);

            // Rimuovi la password dalla risposta
            impiegatoSalvato.setPassword(null);

            return ResponseEntity.ok(impiegatoSalvato);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Errore durante la registrazione: " + e.getMessage());
        }
    }

    @PostMapping("/validate-email")
    public ResponseEntity<?> validateEmail(@RequestBody EmailValidationRequest request) {
        String email = request.getEmail();
        
        if (email == null || email.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Email non valida");
        }

        if (ospiteRepository.existsByEmail(email) || impiegatoRepository.existsByEmail(email)) {
            return ResponseEntity.badRequest().body("Email già in uso");
        }
        
        return ResponseEntity.ok("Email disponibile");
    }

    // Classe interna per la validazione email
    public static class EmailValidationRequest {
        private String email;

        public EmailValidationRequest() {}

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}