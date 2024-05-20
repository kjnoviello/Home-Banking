package com.BancoSaintPatrick.HomeBanking.services.implementations;

import com.BancoSaintPatrick.HomeBanking.dto.UsuarioDTO;
import com.BancoSaintPatrick.HomeBanking.models.Usuario;
import com.BancoSaintPatrick.HomeBanking.repositories.UsuarioRepository;
import com.BancoSaintPatrick.HomeBanking.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImplementation implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public List<UsuarioDTO> getall() {
        return usuarioRepository.findAll().stream().map(UsuarioDTO::new).collect(Collectors.toList());
    }

    @Override
    public UsuarioDTO getUsuarioByID(Long id) {
        return usuarioRepository.findById(id).map(UsuarioDTO::new).orElse(null);
    }

    @Override
    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public void saveUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
    }
}
