package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Stato;

@Repository
public interface StatoRepository extends CrudRepository<Stato, Integer> {
}
