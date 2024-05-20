package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import com.BancoSaintPatrick.HomeBanking.services.TarjetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/tarjetas")
public class TarjetaController {

    @Autowired
    private TarjetaService tarjetaService;

    @GetMapping
    public void getAll(){
        tarjetaService.getall();
    }

    @GetMapping("/{tarjetaNumber}")
    public void getTarjetaByNumber(@PathVariable("tarjetaNumber") double tarjetaNumber){
        tarjetaService.getTarjetaByNumber(tarjetaNumber);
    }


    @PostMapping
    public void saveTarjeta(@RequestBody Tarjeta tarjeta){
        tarjetaService.saveTarjeta(tarjeta);
    }

    @DeleteMapping("/tarjetaNumber")
    public void deleteTarjeta(@PathVariable("tarjetaNumber") double tarjetaNumber){
        tarjetaService.deleteTarjeta(tarjetaNumber);
    }



}
