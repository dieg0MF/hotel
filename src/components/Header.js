

import React from "react";
import {diasSem, meses} from "./DiasMeses"
import AdaptarFecha from "./AdaptarFechas"



export default function Header (props) {



const {availabilityFrom, availabilityTo} = props
    let dateFrom =
      availabilityFrom === "none" ? (
        " Cualquier fecha"
      ) : (
        <span>
          {"el "}
          {diasSem[AdaptarFecha(availabilityFrom).getDay()]}, {AdaptarFecha(availabilityFrom).getDate()} de {meses[AdaptarFecha(availabilityFrom)
    .getMonth()]} de {AdaptarFecha(availabilityFrom)
        .getFullYear()}{" "}
        </span>
      );
    let dateTo =
     availabilityTo === "none" ? (
        " Cualquier fecha"
      ) : (
        <span>
          {"el "}
          {diasSem[(AdaptarFecha(availabilityTo)).getDay()]}, {(AdaptarFecha(availabilityTo)).getDate()} de {meses[(AdaptarFecha(availabilityTo)).getMonth()]} de {(AdaptarFecha(availabilityTo)).getFullYear()}
          {". "}
        </span>
      );
    

  
    return (
      
        <div className="TituloFechas">
          <h1>Hoteles </h1>
          <h3>
            desde <span>{dateFrom} </span> hasta <span>{dateTo} </span>
          </h3>
        </div>
        
      
    );
  }

