package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Stato;
import java.util.Optional;

@Repository
public interface StatoRepository extends JpaRepository<Stato, Integer> {
    Optional<Stato> findByNome(String nome);
}
