package com.BancoSaintPatrick.HomeBanking.dto;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import lombok.Getter;

@Getter
public class TarjetaDTO {
    Long id;
    double numero;
    double pin;

    public TarjetaDTO(Tarjeta tarjeta){
        this.id = tarjeta.getId();
        this.numero = tarjeta.getNumero();
        this.pin = tarjeta.getPin();
    }
}
