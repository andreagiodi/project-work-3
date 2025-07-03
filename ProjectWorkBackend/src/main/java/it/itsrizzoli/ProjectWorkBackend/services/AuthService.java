package it.itsrizzoli.ProjectWorkBackend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;
import it.itsrizzoli.ProjectWorkBackend.dto.AuthenticatedUser;
import it.itsrizzoli.ProjectWorkBackend.repository.ImpiegatoRepository;
import it.itsrizzoli.ProjectWorkBackend.repository.OspiteRepository;

@Service
public class AuthService {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private OspiteRepository ospiteRepository;

    @Autowired
    private ImpiegatoRepository impiegatoRepository;

    /**
     * Verifica il token e ritorna l'utente autenticato
     * @param token Token JWT dai cookie
     * @return AuthenticatedUser contenente le informazioni dell'utente o null se non valido
     */
    public AuthenticatedUser verifyTokenAndGetUser(String token) {
        if (token == null || token.trim().isEmpty()) {
            return null;
        }

        try {
            // Verifica se il token è valido
            if (!jwtService.isTokenValid(token)) {
                return null;
            }

            // Estrai informazioni dal token
            Integer userId = jwtService.getUserIdFromToken(token);
            String userType = jwtService.getUserTypeFromToken(token);

            if (userId == null || userType == null) {
                return null;
            }

            // Recupera l'utente dal database in base al tipo
            if ("ospite".equals(userType)) {
                Optional<Ospite> ospiteOpt = ospiteRepository.findById(userId);
                if (ospiteOpt.isPresent()) {
                    Ospite ospite = ospiteOpt.get();
                    ospite.setPassword(null); // Rimuovi password per sicurezza
                    return new AuthenticatedUser(ospite, "ospite");
                }
            } else if ("impiegato".equals(userType)) {
                Optional<Impiegato> impiegatoOpt = impiegatoRepository.findById(userId);
                if (impiegatoOpt.isPresent()) {
                    Impiegato impiegato = impiegatoOpt.get();
                    impiegato.setPassword(null); // Rimuovi password per sicurezza
                    return new AuthenticatedUser(impiegato, "impiegato");
                }
            }

            return null;
        } catch (Exception e) {
            // Token non valido o corrotto
            System.out.println(e);
            return null;
        }
    }

    /**
     * Verifica se l'utente è un ospite
     * @param token Token JWT
     * @return true se è un ospite, false altrimenti
     */
    public boolean isOspite(String token) {
        try {
            if (!jwtService.isTokenValid(token)) {
                return false;
            }
            return "ospite".equals(jwtService.getUserTypeFromToken(token));
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Verifica se l'utente è un impiegato
     * @param token Token JWT
     * @return true se è un impiegato, false altrimenti
     */
    public boolean isImpiegato(String token) {
        try {
            if (!jwtService.isTokenValid(token)) {
                return false;
            }
            return "impiegato".equals(jwtService.getUserTypeFromToken(token));
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Ottieni solo l'ID dell'utente dal token
     * @param token Token JWT
     * @return ID dell'utente o null se non valido
     */
    public Integer getUserIdFromToken(String token) {
        try {
            if (!jwtService.isTokenValid(token)) {
                return null;
            }
            return jwtService.getUserIdFromToken(token);
        } catch (Exception e) {
            return null;
        }
    }
}