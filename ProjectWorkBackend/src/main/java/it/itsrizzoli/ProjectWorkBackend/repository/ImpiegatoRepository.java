package it.itsrizzoli.ProjectWorkBackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;

@Repository
public interface ImpiegatoRepository extends JpaRepository<Impiegato, Integer> {
    boolean existsByEmail(String email);
    Optional<Impiegato> findByEmail(String email);
}
