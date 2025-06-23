package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Tipo_Ospite;

@Repository
public interface TipoOspiteRepository extends CrudRepository<Tipo_Ospite, Integer> {
}
