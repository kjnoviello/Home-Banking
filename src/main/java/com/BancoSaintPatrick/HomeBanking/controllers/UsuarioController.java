package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import com.BancoSaintPatrick.HomeBanking.models.Usuario;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {

    @GetMapping
    public void getAll(){}

    @GetMapping
    public void getUsuarioByID(@PathVariable("usuarioid") Long usuarioid){}

    @GetMapping("/{usuariodni}")
    public void getusuarioBydni(@PathVariable("usuariodni") double usuariodni){}

    @PostMapping
    public void saveUsuario(@RequestBody Usuario usuario){}

    @DeleteMapping("/usuarioid")
    public void deleteUsuario(@PathVariable("usuarioid") Long usuarioid){}

}
