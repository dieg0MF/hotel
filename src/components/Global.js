import React from "react";
import {hotelsData} from "../Data"
import Cards from "./Cards"
import Header from "./Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture ,faPlaneArrival,faGlobe,faDollarSign,faHotel } from '@fortawesome/free-solid-svg-icons'



const PlaneDeparture = <FontAwesomeIcon icon={faPlaneDeparture} />
const PlaneArrival = <FontAwesomeIcon icon={faPlaneArrival} />
const Globe = <FontAwesomeIcon icon={faGlobe} />
const dollar = <FontAwesomeIcon icon={faDollarSign} />
const Hotel = <FontAwesomeIcon icon={faHotel} />



let handleDataSize;
handleDataSize = hotelsData.map(item => {
  let newSize =
    item.rooms <= 10 ? "Pequeno" : item.rooms <= 20 ? "Mediano" : "Grande";

  return {item, roomsSize: newSize };
});

export default class Global extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      availabilityFrom: "none",
      availabilityTo: "none",
      country: "Todos los paises",
      price: "Cualquier precio",
      size: "Cualquier tamano",
      data: []
    };
  
  }
  componentDidMount() {
    this.setState({ data: handleDataSize });
  }

   handleChange =(event)=>  { 
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };
 
render() {
  const{availabilityTo,availabilityFrom,country,price,size,data}= this.state
    return (
      <div>
        <div className="headerrForm">
        <div className="headerr">
          <Header
            availabilityFrom={availabilityFrom}
            availabilityTo={availabilityTo}
          />
          </div>

          <div className="searchBar">
            <form>

              <div className="Selectores">
            {PlaneArrival}
              <input
                type="date"
                id="start"
                name="availabilityFrom"
                value={availabilityFrom}
                required
                min="2020-07-01"
                max="2021-12-31"
                onChange={this.handleChange}
              />
              </div>

              <div className="Selectores">
              {PlaneDeparture}
              <input
                type="date"
                id="finish"
                name="availabilityTo"
                value={availabilityTo}
                required
                min="2020-07-01"
                max="2021-12-31"
                onChange={this.handleChange}
              />
                </div>
                   
                   
              <div className="Selectores">
              {Globe}
              <select
                value={country}
                onChange={this.handleChange}
                name="country"
              >
                <option value={"Todos los paises"}>Todos los paises</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Chile">Chile</option>
              </select>
              </div>
             
              <div className="Selectores">
              {dollar}
              <select
                value={price}
                onChange={this.handleChange}
                name="price"
                type="number"
              >
                <option value={"Cualquier precio"}>Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>

              </select>
              </div>
              <div className="Selectores">
              {Hotel}
              <select
                value={size}
                onChange={this.handleChange}
                name="size"
              >
                <option value={"Cualquier tamano"}>Cualquier tamano</option>
                <option value="Pequeno">Pequeno</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
              </div>
            </form>
          </div>
          
          </div>

          <div className="body">
          <div className="bodyCards "> 
              <Cards

                key={data.slug}
                info={data}
                country={country}
                price={price}
                size={size}
                availabilityFrom={availabilityFrom}
                availabilityTo={availabilityTo}
              />
            </div>
           
          </div>
        </div>
      
    );
  }
}

