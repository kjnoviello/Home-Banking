package com.BancoSaintPatrick.HomeBanking.services;

import com.BancoSaintPatrick.HomeBanking.dto.TransaccionDTO;
import com.BancoSaintPatrick.HomeBanking.models.Transaccion;

import java.util.List;

public interface TransaccionService {

    List<TransaccionDTO> getall();
    TransaccionDTO getTransaccionByID(Long id);
    void deleteTransaccion(Long id);
    void saveTransaccion(Transaccion transaccion);
}
