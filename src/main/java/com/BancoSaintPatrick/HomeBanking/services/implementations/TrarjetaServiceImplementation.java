package com.BancoSaintPatrick.HomeBanking.services.implementations;

import com.BancoSaintPatrick.HomeBanking.dto.TarjetaDTO;
import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import com.BancoSaintPatrick.HomeBanking.repositories.TarjetaRepository;
import com.BancoSaintPatrick.HomeBanking.services.TarjetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Service
public class TrarjetaServiceImplementation implements TarjetaService {

    @Autowired
    TarjetaRepository tarjetaRepository;

    @Override
    public List<TarjetaDTO> getall() {
        return tarjetaRepository.findAll().stream().map(tarjeta ->new TarjetaDTO(tarjeta)).collect(toList());
    }

    @Override
    public TarjetaDTO getTarjetaByNumber(double number) {
        return tarjetaRepository.findAll().stream().filter(tarjeta -> tarjeta.getNumero() == number).findFirst().map(TarjetaDTO::new).orElse(null);
    }

    @Override
    public void deleteTarjeta(double number) {
        Tarjeta tarjetaABorrar = tarjetaRepository.findAll().stream().filter(tarjeta -> tarjeta.getNumero() == number).findFirst().orElse(null);
        if(tarjetaABorrar != null){
            tarjetaRepository.deleteById(tarjetaABorrar.getId());
        }
    }
    @Override
    public void saveTarjeta(Tarjeta tarjeta) {
        tarjetaRepository.save(tarjeta);
    }
}
