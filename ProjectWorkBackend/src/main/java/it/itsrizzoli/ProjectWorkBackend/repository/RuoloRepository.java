package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Ruolo;

@Repository
public interface RuoloRepository extends CrudRepository<Ruolo, Integer> {
}
