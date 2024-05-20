package com.BancoSaintPatrick.HomeBanking.services;

import com.BancoSaintPatrick.HomeBanking.dto.UsuarioDTO;
import com.BancoSaintPatrick.HomeBanking.models.Usuario;

import java.util.List;

public interface UsuarioService {
    List<UsuarioDTO> getall();
    UsuarioDTO getUsuarioByID(Long id);
    void deleteUsuario(Long id);
    void saveUsuario(Usuario usuario);
}
