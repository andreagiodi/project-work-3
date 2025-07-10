package it.itsrizzoli.ProjectWorkBackend.controller;

import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.services.AuthService;
import it.itsrizzoli.ProjectWorkBackend.services.ReceptionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reception")
public class ReceptionController {

    @Autowired
    private ReceptionService receptionService;

    @Autowired
    private AuthService authService;

    @PostMapping("/ingresso")
    public ResponseEntity<?> registraIngresso(
            @CookieValue(value = "auth_token", required = false) String token,
            @RequestBody Ospite ospite) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null || !user.isImpiegato()) {
            return ResponseEntity.status(403).body("Accesso negato: solo impiegati possono registrare l'ingresso");
        }
        ospite.setPassword(null);
        Ospite salvato = receptionService.registraIngresso(ospite);
        return ResponseEntity.ok(salvato);
    }

    @PostMapping("/uscita/{id}")
    public ResponseEntity<?> registraUscita(
            @CookieValue(value = "auth_token", required = false) String token,
            @PathVariable Integer id) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null || !user.isImpiegato()) {
            return ResponseEntity.status(403).body("Accesso negato: solo impiegati possono registrare l'uscita");
        }

        boolean esito = receptionService.registraUscita(id);
        if (!esito) {
            return ResponseEntity.status(404).body("Ospite non trovato o già uscito");
        }

        return ResponseEntity.ok("Uscita registrata con successo");
    }

    @GetMapping("/presenti")
    public ResponseEntity<?> getOspitiPresenti(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null || !user.isImpiegato()) {
            return ResponseEntity.status(403).body("Accesso negato");
        }

        List<Ospite> presenti = receptionService.getOspitiPresenti();
        return ResponseEntity.ok(presenti);
    }

    @PostMapping("/non-presentato/{id}")
    public ResponseEntity<?> segnaNonPresentato(
            @CookieValue(value = "auth_token", required = false) String token,
            @PathVariable Integer id) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null || !user.isImpiegato()) {
            return ResponseEntity.status(403)
                    .body("Accesso negato: solo impiegati possono registrare il non presentato");
        }

        boolean esito = receptionService.segnaNonPresentato(id);
        if (!esito) {
            return ResponseEntity.status(404).body("Prenotazione non trovata o già gestita");
        }

        return ResponseEntity.ok("Prenotazione segnata come non presentato");
    }
}