package com.BancoSaintPatrick.HomeBanking.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Transaccion {

    Long id;
    Usuario emisor;
    Usuario Receptor;
    double monto;

}
