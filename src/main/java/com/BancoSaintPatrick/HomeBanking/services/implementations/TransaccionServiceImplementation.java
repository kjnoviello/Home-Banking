package com.BancoSaintPatrick.HomeBanking.services.implementations;

import com.BancoSaintPatrick.HomeBanking.dto.TransaccionDTO;
import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import com.BancoSaintPatrick.HomeBanking.repositories.TransaccionRepository;
import com.BancoSaintPatrick.HomeBanking.services.TransaccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransaccionServiceImplementation implements TransaccionService {

    @Autowired
    TransaccionRepository transaccionRepository;

    @Override
    public List<TransaccionDTO> getall() {
        return transaccionRepository.findAll().stream().map(TransaccionDTO::new).collect(Collectors.toList());
    }

    @Override
    public TransaccionDTO getTransaccionByID(Long id) {
        return transaccionRepository.findById(id).map(TransaccionDTO::new).orElse(null);
    }

    @Override
    public void deleteTransaccion(Long id) {
        transaccionRepository.deleteById(id);
    }

    @Override
    public void saveTransaccion(Transaccion transaccion) {
        transaccionRepository.save(transaccion);
    }
}
