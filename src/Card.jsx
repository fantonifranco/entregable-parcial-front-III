import React from "react";

const Card = ({clientes}) => {
  return (
  <div>
      <h2>Clientes ingresados:</h2>
      {clientes.map((cliente,index)=>(
      <div key={index}>
      <h3>Cliente: {index + 1}</h3>
      <p>Nombre: {cliente.nombre}</p>
      <p>Appelido: {cliente.apellido}</p>
      </div>
      ))}
  </div>
  )};

export default Card;