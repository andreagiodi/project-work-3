package it.itsrizzoli.ProjectWorkBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.services.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        
        if (user == null) {
            return ResponseEntity.status(401).body("Token non valido o scaduto");
        }

        return ResponseEntity.ok(user);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }

        // Ritorna informazioni base dell'utente
        return ResponseEntity.ok(java.util.Map.of(
            "id", user.getUserId(),
            "email", user.getUserEmail(),
            "fullName", user.getUserFullName(),
            "userType", user.getUserType()
        ));
    }

    @GetMapping("/check-ospite")
    public ResponseEntity<?> checkIfOspite(@CookieValue(value = "auth_token", required = false) String token) {
        boolean isOspite = authService.isOspite(token);
        
        if (!isOspite) {
            return ResponseEntity.status(403).body("Accesso riservato agli ospiti");
        }

        return ResponseEntity.ok("Utente è un ospite");
    }

    @GetMapping("/check-staff")
    public ResponseEntity<?> checkIfStaff(@CookieValue(value = "auth_token", required = false) String token) {
        boolean isImpiegato = authService.isImpiegato(token);
        
        if (!isImpiegato) {
            return ResponseEntity.status(403).body("Accesso riservato al personale");
        }

        return ResponseEntity.ok("Utente è un impiegato");
    }

    @GetMapping("/user-type")
    public ResponseEntity<?> getUserType(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        
        if (user == null) {
            return ResponseEntity.status(401).body("Token non valido");
        }

        return ResponseEntity.ok(java.util.Map.of("userType", user.getUserType()));
    }
}