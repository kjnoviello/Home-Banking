package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/transacciones")
public class TransaccionController {

    @GetMapping
    public void getAll(){}

    @GetMapping("/{usuarioid}")
    public void getTransaccionByusuario(@PathVariable("usuarioid") Long usuarioid){}

    @PostMapping
    public void saveTransaccion(@RequestBody Transaccion transaccion){}

    @DeleteMapping("/transaccionid")
    public void deleteTarjeta(@PathVariable("transaccionid") Long transaccionid){}
}
