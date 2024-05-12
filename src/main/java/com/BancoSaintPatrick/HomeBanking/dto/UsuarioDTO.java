package com.BancoSaintPatrick.HomeBanking.dto;

import com.BancoSaintPatrick.HomeBanking.models.Tarjeta;
import com.BancoSaintPatrick.HomeBanking.models.Transaccion;
import com.BancoSaintPatrick.HomeBanking.models.Usuario;
import lombok.Getter;

import java.util.List;

@Getter
public class UsuarioDTO {

    Long id;
    double dni;
    String nombre;
    double saldo;
    List<Transaccion> transacciones;
    List<Tarjeta> tarjetas;

    public UsuarioDTO(Usuario usuario){

        this.id = usuario.getId();
        this.dni = usuario.getDni();
        this.nombre = usuario.getNombre();
        this.saldo = usuario.getSaldo();
        this.transacciones = usuario.getTransacciones();
        this.tarjetas = usuario.getTarjetas();
    }
}
