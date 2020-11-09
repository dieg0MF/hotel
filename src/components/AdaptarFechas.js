
import React from "react";


function AdaptarFecha  (x)  {
    let fecha = new Date(x);
    fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
    return fecha;
  };
  

  export default AdaptarFecha


  