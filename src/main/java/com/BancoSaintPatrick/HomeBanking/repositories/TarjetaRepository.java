package com.BancoSaintPatrick.HomeBanking.repositories;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TarjetaRepository extends JpaRepository<Long, Tarjeta> {
}
