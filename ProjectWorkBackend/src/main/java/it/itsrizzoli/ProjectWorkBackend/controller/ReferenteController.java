package it.itsrizzoli.ProjectWorkBackend.controller;

import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.dto.ModificaPrenotazioneRequest;
import it.itsrizzoli.ProjectWorkBackend.Prenotazione;
import it.itsrizzoli.ProjectWorkBackend.services.AuthService;
import it.itsrizzoli.ProjectWorkBackend.services.ReferenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/referente")
public class ReferenteController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ReferenteService referenteService;

    // Ottiene la lista di tutte le prenotazioni associate al referente.

    @GetMapping("/prenotazioni")
    public ResponseEntity<?> getMiePrenotazioni(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        if (!user.isReferente()) {
            return ResponseEntity.status(403).body("Accesso negato: ruolo non sufficiente.");
        }

        List<Prenotazione> prenotazioni = referenteService.getPrenotazioniPerReferente(user.getUserId());
        return ResponseEntity.ok(prenotazioni);
    }

    // Approva una prenotazione.

    @PostMapping("/prenotazioni/{id}/approva")
    public ResponseEntity<?> approvaPrenotazione(
            @PathVariable("id") Integer idPrenotazione,
            @CookieValue(value = "auth_token", required = false) String token) {

        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        /*if (!user.isReferente()) {
            return ResponseEntity.status(403).body("Accesso negato: ruolo non sufficiente.");
        }*/

        try {
            Prenotazione prenotazioneAggiornata = referenteService.aggiornaStatoPrenotazione(idPrenotazione,
                    user.getUserId(), "Confermato");
            return ResponseEntity.ok(prenotazioneAggiornata);
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    // Rifiuta una prenotazione.

    @PostMapping("/prenotazioni/{id}/rifiuta")
    public ResponseEntity<?> rifiutaPrenotazione(
            @PathVariable("id") Integer idPrenotazione,
            @CookieValue(value = "auth_token", required = false) String token) {

        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        if (!user.isReferente()) {
            return ResponseEntity.status(403).body("Accesso negato: ruolo non sufficiente.");
        }

        try {
            Prenotazione prenotazioneAggiornata = referenteService.aggiornaStatoPrenotazione(idPrenotazione,
                    user.getUserId(), "Rifiutato");
            return ResponseEntity.ok(prenotazioneAggiornata);
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    // Modifica una specifica prenotazione.

    @PutMapping("/prenotazioni/{id}")
    public ResponseEntity<?> modificaPrenotazione(
            @PathVariable("id") Integer idPrenotazione,
            @RequestBody ModificaPrenotazioneRequest request,
            @CookieValue(value = "auth_token", required = false) String token) {

        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        if (!user.isReferente()) {
            return ResponseEntity.status(403).body("Accesso negato: ruolo non sufficiente.");
        }

        try {
            Prenotazione prenotazioneAggiornata = referenteService.modificaOrarioPrenotazione(idPrenotazione,
                    user.getUserId(), request);
            return ResponseEntity.ok(prenotazioneAggiornata);
        } catch (SecurityException e) {
            return ResponseEntity.status(403).body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}