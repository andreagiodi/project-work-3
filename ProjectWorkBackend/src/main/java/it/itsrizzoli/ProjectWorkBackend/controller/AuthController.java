package it.itsrizzoli.ProjectWorkBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Ospite;
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

        java.util.Map<String, Object> response = new java.util.HashMap<>();
        response.put("id", user.getUserId());
        response.put("email", user.getUserEmail());
        response.put("fullName", user.getUserFullName());
        response.put("userType", user.getUserType());


        if (user.isImpiegato()) {
            response.put("idRuolo", user.getUserRoleId());
        } else if (user.isOspite()) {
            Ospite ospite = user.getAsOspite();
            response.put("telefono", ospite.getTelefono());
            response.put("codiceFiscale", ospite.getCodiceFiscale());
            response.put("azienda", ospite.getAzienda());
            response.put("idTipoOspite", ospite.getIdTipoOspite());
        }

        return ResponseEntity.ok(response);
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
