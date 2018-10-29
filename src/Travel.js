import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
      <h1>{props.country}</h1>
      <p>{props.destination}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Travel;