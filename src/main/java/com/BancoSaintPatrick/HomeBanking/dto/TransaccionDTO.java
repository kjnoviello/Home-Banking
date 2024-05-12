package com.BancoSaintPatrick.HomeBanking.dto;

import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import com.BancoSaintPatrick.HomeBanking.models.Usuario;

public class TransaccionDTO {

    Long id;
    Usuario emisor;
    Usuario receptor;
    double monto;

    public TransaccionDTO(Transaccion transaccion){
        this.emisor = transaccion.getEmisor();
        this.receptor = transaccion.getReceptor();
        this.monto = transaccion.getMonto();
    }
}
