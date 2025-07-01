package it.itsrizzoli.ProjectWorkBackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Ospite;

@Repository
public interface OspiteRepository extends JpaRepository<Ospite, Integer> {
    boolean existsByEmail(String email);
    Optional<Ospite> findByEmail(String email);
}