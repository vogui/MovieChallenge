import React, { useCallback, useEffect, useState } from "react";
import { MoviesContainer, Input, FiltersContainer, InputAño, DropsContainer } from "./styles";
import Movies from "../movies/Movies";
import { entries } from "../utils/movies.json";
import Drops from "../utils/drops";
import { orders, filters, texts } from "../utils/assistant";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  //const [name, setName] = useState("");
  const [moviesShow, setMoviesShow] = useState([]);
  const [year, setYear] = useState([]);

  const getMovies = () => {
    new Promise((res) => setMoviesArray(entries)).catch(() =>
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
      default: 
      break;
    }
    setVariable(variable);
  };

  const handleInput = useCallback((value , moviesArray) => {
    let newArray = moviesArray.filter((ele) =>{
     return ele.title.toLowerCase().includes(value.toLowerCase())
    });
    setMoviesShow(newArray);
    handleChange(setFilter, '')
    handleChange(setOrder, '')
  },[]);

  const handleFilter = useCallback((value, moviesArray, year) => {
    let newArray = [];
    handleChange(setFilter, value)
    switch (value) {
      case texts.Pelicula:
        moviesArray.map((movie) => {
          if (movie.programType === texts.movie) {
            return newArray.push(movie);
          }
          return null
        });
        setMoviesShow(newArray);
        break;
      case texts.Serie:
        moviesArray.map((movie) => {
          if (movie.programType === texts.series) {
            return newArray.push(movie);
          }
          return null
        });
        setMoviesShow(newArray);
        break;
      case texts.Año:
        moviesArray.map((movie) => {
          if (movie.releaseYear === parseInt(year)) {
            return newArray.push(movie);
          }
          return null
        });
        setMoviesShow(newArray);
        break;
      default:
        newArray = [];
        break;
    }
  },[]);

  const handleOrder = useCallback((value, moviesArray, year) => {
    let helperArray = [];
    let newArray = [];
    handleChange(setOrder, value)
    switch (value) {
      case texts.Nombre:
        moviesArray.map((movie) => { return helperArray.push(movie.title)});
        helperArray.sort().map((title) => {
         return moviesArray.map((movie) => {
            if (movie.title === title) {
              return newArray.push(movie);
            }
            return null
          });
        });
        setMoviesShow(newArray);
        break;
      case texts.Año:
        moviesArray.map((movie) => {return helperArray.push(movie.releaseYear)});
        helperArray
          .sort(function (a, b) {
            return a - b;
          })
          .map((year) => {
           return moviesArray.map((movie) => {
              if (movie.releaseYear === parseInt(year)) {
                if (!newArray.includes(movie)) {
                  return newArray.push(movie);
                }
              }
              return null
            });
          });
        setMoviesShow(newArray);
        break;
      default:
        newArray = [];
        break;
    }
  },[]);

  useEffect(() => getMovies(), []);

  return (
    <MoviesContainer>
      <FiltersContainer>
        <DropsContainer filter={filter}>
        <Drops
          value={order}
          text={texts.Ordenar}
          menu={orders}
          handleChange={handleOrder}
          movies={moviesArray}
        />
        <Drops
          value={filter}
          text={texts.Filtrar}
          menu={filters}
          year={year}
          handleChange={handleFilter}
          movies={moviesArray}
        />
        </DropsContainer>
        {filter === "Año" ? (
          <InputAño
           type="number"
            placeholder="Año ej:2016"
            onChange={(e) => handleChange(setYear, e.target.value)}
          />
        ) : null}
        <Input
          placeholder="Que pelicula desea"
          onChange={(e) => handleInput(e.target.value, moviesArray)}
        />
      </FiltersContainer>
      <Movies movies={moviesShow.length > 0 ? moviesShow : moviesArray} />
    </MoviesContainer>
  );
};

export default Home;
