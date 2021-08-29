import React, { useEffect, useState } from "react";
import { MoviesContainer, Input, FiltersContainer } from "./styles";
import Movies from "../movies/Movies";
import { entries } from "../utils/movies.json";
import Drops from "../utils/drops";
import { orders, filters } from "../utils/assistant";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [moviesShow, setMoviesShow] = useState([]);
  const getMovies = () => {
    const res = new Promise((res) => setMoviesArray(entries)).catch(() =>
      setMoviesArray("NotFound")
    );
  };

  const handleChange = (setVariable, variable) => {
    switch (setVariable) {
      case setOrder:
        setFilter("");
        break;
      case setFilter:
        setOrder("");
        break;
    }
    setVariable(variable);
  };
  const handleInput = (value) => {
    let newArray = moviesArray.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase())
    );

    setMoviesShow(newArray);
  };
//  const handleFilter = (value)=>{
  //  let newArray = [];
 //   switch(value){
   //   case "Pelicula":
    //    moviesArray.map((ele) => {
     //     newArray.push(ele)});

   // }
  //}

  const handleOrder = (value) => {
    let helperArray = [];
    let newArray = [];
    switch (value) {
      case "Nombre":
        moviesArray.map((ele) => helperArray.push(ele.title));
        helperArray.sort().map(title => {
          moviesArray.map((movie) => {
            if (movie.title === title) {
              newArray.push(movie)
            }
          });
        });
        setMoviesShow(newArray)
        break
      case "Año":
        moviesArray.map((ele) => helperArray.push(ele.releaseYear));
        helperArray.sort(function(a, b){return a - b}).map(year => {
          moviesArray.map((movie) => {
            if (movie.releaseYear === year) {
              if(!newArray.includes(movie)){
                newArray.push(movie)
              }
            }
          });
        });
        setMoviesShow(newArray)
    }
  };

  useEffect(() => getMovies(), []);
  useEffect(() => {
    handleInput(name);
  }, [name]);
  useEffect(() => {
    handleOrder(order);
  }, [order]);
  //useEffect(() => {
   // handleFilter(filter);
  //}, [filter]);

  console.log(moviesArray[0])

  return (
    <MoviesContainer>
      <FiltersContainer>
        <Drops
          value={order}
          menu={orders}
          handleChange={handleChange}
          sets={setOrder}
        />
        <Drops
          value={filter}
          menu={filters}
          handleChange={handleChange}
          sets={setFilter}
        />
        <Input
          placeholder="Que pelicula desea"
          onChange={(e) => handleChange(setName, e.target.value)}
        ></Input>
      </FiltersContainer>
      <Movies movies={moviesShow.length > 0 ? moviesShow : moviesArray} />
    </MoviesContainer>
  );
};

export default Home;
