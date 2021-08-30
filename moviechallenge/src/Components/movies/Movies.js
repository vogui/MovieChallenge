import React from "react";
import { texts } from "../utils/assistant";
import CardMovies from "./CardMovies";
import { MovieContainer, Control } from "./styles";

const Movies = (props) => {
  return (
    <MovieContainer>
      {props.type === texts.Año && props.movies.length === 0 ? (
        <Control black={true}> Por favor escriba el año de búsqueda </Control>
      ) : props.movies.length === 0 ? (
        <Control> Título no disponible </Control>
      ) : (
        props.movies.map((movie) => <CardMovies movie={movie} />)
      )}
    </MovieContainer>
  );
};

export default Movies;
