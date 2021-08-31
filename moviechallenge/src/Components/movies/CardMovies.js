import React, { useState } from "react";
import { Card, Img, P, Description } from "./styles";

const CardMovies = (props) => {
  let img = props.movie.images['Poster Art'].url
  const [description, setDescription]=useState(false)
  const handle = ()=>setDescription(!description)
  return (
    <Card onClick={()=>handle()} change={description}>
      {description?
      <Description>
      <P>{props.movie.description}</P>
      <P>{props.movie.programType}</P>
      <P>{props.movie.releaseYear}</P>
      </Description>
      :
      <>
        <Img src={img}/>
      <P>{props.movie.title}</P>
      </>
      }
    </Card>
  );
};
  

export default CardMovies;
