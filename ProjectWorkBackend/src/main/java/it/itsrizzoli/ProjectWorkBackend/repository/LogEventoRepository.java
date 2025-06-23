package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.LogEvento;

@Repository
public interface LogEventoRepository extends CrudRepository<LogEvento, Integer> {
}
