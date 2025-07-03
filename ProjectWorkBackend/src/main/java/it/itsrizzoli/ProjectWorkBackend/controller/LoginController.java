package it.itsrizzoli.ProjectWorkBackend.controller;

import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.dto.LoginRequest;
import it.itsrizzoli.ProjectWorkBackend.repository.ImpiegatoRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;
import it.itsrizzoli.ProjectWorkBackend.services.JwtService;

@RestController
public class LoginController {

    @Autowired
    private ImpiegatoRepository impiegatoRepository;

    @Autowired
    private OspiteRepository ospiteRepository;

    @Autowired
    private JwtService jwtService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        Optional<Ospite> ospiteOpt = ospiteRepository.findByEmail(loginRequest.getEmail());

        if (ospiteOpt.isEmpty()) {
            Optional<Impiegato> impiegatoOpt = impiegatoRepository.findByEmail(loginRequest.getEmail());

            if (impiegatoOpt.isEmpty()) {
                return ResponseEntity.badRequest().body("Credenziali non valide");
            }

            Impiegato impiegato = impiegatoOpt.get();

            if (!passwordEncoder.matches(loginRequest.getPassword(), impiegato.getPassword())) {
                return ResponseEntity.badRequest().body("Credenziali non valide");
            }

            String token = jwtService.generateTokenForImpiegato(impiegato.getId());

            Cookie sessionCookie = new Cookie("auth_token", token);
            System.out.println("Token " + token);
            sessionCookie.setMaxAge(24 * 60 * 60);
            sessionCookie.setHttpOnly(true);
            sessionCookie.setPath("/");
            sessionCookie.setSecure(true);

            response.addCookie(sessionCookie);

            impiegato.setPassword(null);
            return ResponseEntity.ok(impiegato);
        }

        Ospite ospite = ospiteOpt.get();

        if (!passwordEncoder.matches(loginRequest.getPassword(), ospite.getPassword())) {
            return ResponseEntity.badRequest().body("Credenziali non valide");
        }

        String token = jwtService.generateTokenForOspite(ospite.getId());

        Cookie sessionCookie = new Cookie("auth_token", token);
        System.out.println("Token " + token);
        sessionCookie.setMaxAge(24 * 60 * 60);
        sessionCookie.setHttpOnly(true);
        sessionCookie.setPath("/");
        sessionCookie.setSecure(true);
        response.addCookie(sessionCookie);

        ospite.setPassword(null);
        return ResponseEntity.ok(ospite);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {

        Cookie sessionCookie = new Cookie("auth_token", "");
        sessionCookie.setMaxAge(0);
        sessionCookie.setPath("/");
        response.addCookie(sessionCookie);

        return ResponseEntity.ok("Logout effettuato");
    }
}
