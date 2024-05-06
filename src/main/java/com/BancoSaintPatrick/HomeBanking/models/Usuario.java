package com.BancoSaintPatrick.HomeBanking.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Usuario {

    double dni;
    String nombre;
    double saldo;
    List<Transaccion> transacciones;
    List<Tarjeta> tarjetas;
}
