package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Usuario;
import com.BancoSaintPatrick.HomeBanking.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public void getAll(){
        usuarioService.getall();
    }

    @GetMapping("/{usuarioid}")
    public void getUsuarioByID(@PathVariable("usuarioid") Long usuarioid){
        usuarioService.getUsuarioByID(usuarioid);
    }

    @PostMapping
    public void saveUsuario(@RequestBody Usuario usuario){
        usuarioService.saveUsuario(usuario);
    }

    @DeleteMapping("/usuarioid")
    public void deleteUsuario(@PathVariable("usuarioid") Long usuarioid){
        usuarioService.deleteUsuario(usuarioid);
    }

}
