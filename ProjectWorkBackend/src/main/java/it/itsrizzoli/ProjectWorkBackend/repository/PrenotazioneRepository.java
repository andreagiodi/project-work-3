package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Prenotazione;

@Repository
public interface PrenotazioneRepository extends CrudRepository<Prenotazione, Integer> {
    Iterable<Prenotazione> findByIdOspite(Integer idOspite);
}
