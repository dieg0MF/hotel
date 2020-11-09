
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt ,faBed,faDollarSign } from '@fortawesome/free-solid-svg-icons'


 function Card(props) {
  const { data,index } = props;


  const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
  const Bed = <FontAwesomeIcon icon={faBed} />
  const Dollar = <FontAwesomeIcon icon={faDollarSign} />

  
  return (
 
    <div className="card" key={index}>
      <img src={data.item.photo} alt="" className="hotel__image" />
      <div className="info">
        <h4>{data.item.name}</h4>
        <p>{data.item.description}</p>
        <div className="ubicacion">{mapMarker}
          {data.item.city} , {data.item.country}
        </div>
        <div className="habprecio">
          <div className="habitaciones">{Bed}{data.item.rooms} Habitaciones</div>
          <div className="precio">   {Dollar}
        <i
          className={"fas fa-dollar-sign dolar number" + (5 - data.item.price)}
        ></i>
        <i
          className={"fas fa-dollar-sign dolar number" + (6 - data.item.price)}
        ></i>
        <i
          className={"fas fa-dollar-sign dolar number" + (7 - data.item.price)}
        ></i></div>
        </div>
      </div>
      <div className="contenedorBoton">
        <div className="botoncito">
          <button>reservar</button>
        </div>
      </div>
      </div>
    
  );
}
export default Card
