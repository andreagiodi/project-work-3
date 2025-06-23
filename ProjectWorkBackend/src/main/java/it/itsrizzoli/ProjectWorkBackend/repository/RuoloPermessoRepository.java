package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Ruolo_Permesso;

@Repository
public interface RuoloPermessoRepository extends CrudRepository<Ruolo_Permesso, Ruolo_Permesso.RuoloPermessoId> {
}
