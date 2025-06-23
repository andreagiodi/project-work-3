package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Motivazione;

@Repository
public interface MotivazioneRepository extends CrudRepository<Motivazione, Integer> {
}
