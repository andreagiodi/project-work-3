package it.itsrizzoli.ProjectWorkBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;

@Repository
public interface AdminRepository extends JpaRepository<Impiegato, Integer> {
    
    @Query("SELECT o FROM Ospite o")
    Iterable<Ospite> findAllOspite();
    
    @Query("SELECT i FROM Impiegato i")
    Iterable<Impiegato> findAllImpiegato();
}