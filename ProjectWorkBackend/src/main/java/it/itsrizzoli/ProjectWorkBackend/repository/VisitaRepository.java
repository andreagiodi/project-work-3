package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import it.itsrizzoli.ProjectWorkBackend.Visita;
import java.util.Optional;
import java.util.List;

@Repository
public interface VisitaRepository extends CrudRepository<Visita, Integer> {

    List<Visita> findByIdReferente(Integer idReferente);

    Optional<Visita> findByIdPrenotazione(Integer idPrenotazione);
}
