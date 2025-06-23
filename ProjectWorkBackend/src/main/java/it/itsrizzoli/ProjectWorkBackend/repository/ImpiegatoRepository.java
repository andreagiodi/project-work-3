package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;

@Repository
public interface ImpiegatoRepository extends CrudRepository<Impiegato, Integer> {
}
