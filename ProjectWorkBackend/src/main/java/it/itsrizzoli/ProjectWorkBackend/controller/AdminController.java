package it.itsrizzoli.ProjectWorkBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.dto.SetPasswordRequest;
import it.itsrizzoli.ProjectWorkBackend.dto.SetRuoloRequest;
import it.itsrizzoli.ProjectWorkBackend.repository.AdminRepository;
import it.itsrizzoli.ProjectWorkBackend.services.AuthService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private AuthService authService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping("/ospiti")
    public ResponseEntity<?> getAllOspiti(@CookieValue(value = "auth_token", required = false) String token) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        return ResponseEntity.ok(adminRepository.findAllOspite());
    }

    @GetMapping("/impiegati")
    public ResponseEntity<?> getAllImpiegati(
            @CookieValue(value = "auth_token", required = false) String token
    ) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);

        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        return ResponseEntity.ok(adminRepository.findAllImpiegato());
    }

    // set impiegato role
    @PostMapping("/impiegati/{id}/ruolo")
    public ResponseEntity<?> setImpiegatoRole(
            @PathVariable("id") Integer id,
            @RequestBody SetRuoloRequest request,
            @CookieValue(value = "auth_token", required = false) String token
    ) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        adminRepository.setImpiegatoRole(id, request.getIdRuolo());
        return ResponseEntity.ok().build();
    }


    // set ospite password
    @PostMapping("/ospiti/{id}/password")
    public ResponseEntity<?> setOspitePassword(
            @PathVariable("id") Integer id,
            @RequestBody SetPasswordRequest request,
            @CookieValue(value = "auth_token", required = false) String token
    ) {
        System.out.println(token);
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        adminRepository.setOspitePassword(id, passwordEncoder.encode(request.getPassword()));
        return ResponseEntity.ok().build();
    }

    // set impiegato password
    @PostMapping("/impiegati/{id}/password")
    public ResponseEntity<?> setImpiegatoPassword(
            @PathVariable("id") Integer id,
            @RequestBody SetPasswordRequest request,
            @CookieValue(value = "auth_token", required = false) String token
    ) {
        AuthenticatedUser user = authService.verifyTokenAndGetUser(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Non autenticato");
        }
        adminRepository.setImpiegatoPassword(id, passwordEncoder.encode(request.getPassword()));
        return ResponseEntity.ok().build();
    }

}
