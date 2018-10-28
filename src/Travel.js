import React from "react";

const Quote = props => (
  <figure>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
      <h1>{props.country}</h1>
      <p>{props.destination}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default Quote;