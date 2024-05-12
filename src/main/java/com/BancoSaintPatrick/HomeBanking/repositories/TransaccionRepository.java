package com.BancoSaintPatrick.HomeBanking.repositories;

import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TransaccionRepository extends JpaRepository<Long, Transaccion> {
}
