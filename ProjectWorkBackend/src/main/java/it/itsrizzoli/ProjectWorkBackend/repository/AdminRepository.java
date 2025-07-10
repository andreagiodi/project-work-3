package it.itsrizzoli.ProjectWorkBackend.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;

@Repository
public interface AdminRepository extends JpaRepository<Impiegato, Integer> {
    
    @Query("SELECT o FROM Ospite o")
    Iterable<Ospite> findAllOspite();
    
    @Query("SELECT i FROM Impiegato i")
    Iterable<Impiegato> findAllImpiegato();

    @Modifying
    @Transactional
    @Query("UPDATE Impiegato i SET i.idRuolo = :idRuolo WHERE i.id = :id")
    void setImpiegatoRole(@Param("id") Integer id, @Param("idRuolo") Integer idRuolo);

    @Modifying
    @Transactional
    @Query("UPDATE Ospite o SET o.password = :password WHERE o.id = :id")
    void setOspitePassword(@Param("id") Integer id, @Param("password") String password);

    @Modifying
    @Transactional
    @Query("UPDATE Impiegato i SET i.password = :password WHERE i.id = :id")
    void setImpiegatoPassword(@Param("id") Integer id, @Param("password") String password);
}