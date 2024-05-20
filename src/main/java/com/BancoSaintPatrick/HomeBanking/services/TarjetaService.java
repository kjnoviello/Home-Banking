package com.BancoSaintPatrick.HomeBanking.services;


import com.BancoSaintPatrick.HomeBanking.dto.TarjetaDTO;
import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;

import java.util.List;

public interface TarjetaService {

    List<TarjetaDTO> getall();
    TarjetaDTO getTarjetaByNumber(double number);
    void deleteTarjeta(double number);
    void saveTarjeta(Tarjeta tarjeta);
}
