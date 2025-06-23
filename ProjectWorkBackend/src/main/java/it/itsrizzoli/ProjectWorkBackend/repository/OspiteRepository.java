package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Ospite;

@Repository
public interface OspiteRepository extends CrudRepository<Ospite, Integer> {
}
