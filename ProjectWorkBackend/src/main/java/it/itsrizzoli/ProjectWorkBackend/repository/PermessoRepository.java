package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Permesso;

@Repository
public interface PermessoRepository extends CrudRepository<Permesso, Integer> {
}
