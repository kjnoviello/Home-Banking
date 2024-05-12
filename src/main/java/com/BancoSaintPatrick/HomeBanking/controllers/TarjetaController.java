package com.BancoSaintPatrick.HomeBanking.controllers;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/tarjetas")
public class TarjetaController {

    @GetMapping
    public void getAll(){}

    @GetMapping("/{tarjetaid}")
    public void getTarjetaByID(@PathVariable("clientid") Long clientid){}

    @PostMapping
    public void saveTarjeta(@RequestBody Tarjeta tarjeta){}

    @DeleteMapping("/tarjetaid")
    public void deleteTarjeta(@PathVariable("tarjetaid") Long tarjetaid){}



}
