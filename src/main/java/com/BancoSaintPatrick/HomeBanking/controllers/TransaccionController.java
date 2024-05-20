package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import com.BancoSaintPatrick.HomeBanking.services.TransaccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/transacciones")
public class TransaccionController {

    @Autowired
    private TransaccionService transaccionService;

    @GetMapping
    public void getAll(){
        transaccionService.getall();
    }

    @GetMapping("/{usuarioid}")
    public void getTransaccionByusuario(@PathVariable("usuarioid") Long usuarioid){
        transaccionService.getTransaccionByID(usuarioid);
    }

    @PostMapping
    public void saveTransaccion(@RequestBody Transaccion transaccion){
        transaccionService.saveTransaccion(transaccion);
    }

    @DeleteMapping("/transaccionid")
    public void deleteTarjeta(@PathVariable("transaccionid") Long transaccionid){
        transaccionService.deleteTransaccion(transaccionid);
    }
}
