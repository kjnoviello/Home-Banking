package com.BancoSaintPatrick.HomeBanking.repositories;

import com.BancoSaintPatrick.HomeBanking.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
}
