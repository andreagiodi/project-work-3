package it.itsrizzoli.ProjectWorkBackend.services;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtService {
    
    private final String secretKey = "mySecretKey123456789"; // Usa una chiave più lunga
    private final long expiration = 86400000; // 24 ore
    
    public String generateTokenForOspite(Integer ospiteId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userType", "ospite");
        claims.put("userId", ospiteId);
        
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(ospiteId.toString())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
    
    public String generateTokenForImpiegato(Integer impiegatoId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userType", "impiegato");
        claims.put("userId", impiegatoId);
        
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(impiegatoId.toString())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
    
    public Integer getUserIdFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
        return (Integer) claims.get("userId");
    }
    
    public String getUserTypeFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
        return (String) claims.get("userType");
    }
    
    public boolean isTokenValid(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}