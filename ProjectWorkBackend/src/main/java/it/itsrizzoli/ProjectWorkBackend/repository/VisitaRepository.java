package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Visita;

@Repository
public interface VisitaRepository extends CrudRepository<Visita, Integer> {
}
