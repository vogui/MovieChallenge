import React from "react";
import { Card, Img } from "./styles";
const CardMovies = (props) => {
  let img = props.movie.images['Poster Art'].url
  return (
    <Card>
        <Img src={img}/>
      <p>{props.movie.title}</p>
    </Card>
  );
};
  

export default CardMovies;
