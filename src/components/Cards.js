import React from "react";
import Card from "./Card";
import CardNoHotel from "./CardNoHotel"

 function Cards (props) {
 const {price,country,availabilityFrom,availabilityTo,size,info} = props

  let dataFiltrada = () => {
   
    let dataFiltradaPrecio =
      price === "Cualquier precio"
        ? info
        : info.filter(dat => dat.item.price === parseInt(price, 10));
    let dataFiltradaPais =
      country === "Todos los paises"
        ? dataFiltradaPrecio
        : dataFiltradaPrecio.filter(datu => datu.item.country === country);

    let dataFiltradaFechasFrom =
      availabilityFrom === "none"
        ? dataFiltradaPais
        : dataFiltradaPais.filter(
            dato =>
              dato.item.availabilityFrom <=
                new Date(availabilityFrom).valueOf() + 97199000 &&
              new Date(availabilityFrom).valueOf() + 97199000 <=
                dato.item.availabilityTo
          );
          //// 97199000 was added to make the date 23:59 of that date in argentina
    let dataFiltradaFechasTo =
      availabilityTo === "none"
        ? dataFiltradaFechasFrom
        : dataFiltradaFechasFrom.filter(
            dati =>
              dati.item.availabilityFrom <=
                new Date(availabilityTo).valueOf() + 97199000 &&
              new Date(availabilityFrom).valueOf() + 97199000 <=
                new Date(availabilityTo).valueOf() + 97199000 &&
              new Date(availabilityTo).valueOf() + 97199000 <=
                dati.item.availabilityTo
          );

    let dataFiltradaTamano =
      size === "Cualquier tamano"
        ? dataFiltradaFechasTo
        : dataFiltradaFechasTo.filter(date => date.roomsSize === size);

    return dataFiltradaTamano;
  };

   if(dataFiltrada().length !== 0)  {
     return (dataFiltrada().map((res,index) =>  <Card data={res} key={index} />) ) 
   } else {
     return(<div className="noHotel"> <CardNoHotel/> </div>)
    }
  
  
}

export default Cards