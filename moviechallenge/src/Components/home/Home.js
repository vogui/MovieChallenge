import React, { useCallback, useEffect, useState } from "react";
import { MoviesContainer, Input, FiltersContainer, InputAño, DropsContainer } from "./styles";
import Movies from "../movies/Movies";
import Footer from "../footer/Footer"
import { entries } from "../utils/movies.json";
import Drops from "../utils/drops";
import { orders, filters, texts } from "../utils/assistant";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [moviesShow, setMoviesShow] = useState(null);


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

  const handleInput = useCallback((value) => {
    let newArray = moviesArray.filter((ele) =>{
     return ele.title.toLowerCase().includes(value.toLowerCase())
    });
    setMoviesShow(newArray);
    handleChange(setFilter, '')
    handleChange(setOrder, '')
  },[moviesArray]);

  const handleFilter = useCallback((value , year=null) => {
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
    
  },[moviesArray]);

  const handleOrder = useCallback((value) => {
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
  },[moviesArray]);

  useEffect(() => getMovies(), []);

  return (
    <>
    <MoviesContainer>
      <FiltersContainer>
        <DropsContainer filter={filter}>
        <Drops
          value={order}
          text={texts.Ordenar}
          menu={orders}
          handleChange={handleOrder}
        />
        <Drops
          value={filter}
          text={texts.Filtrar}
          menu={filters}
          handleChange={handleFilter}
        />
        </DropsContainer>
        {filter === texts.Año ? (
          <InputAño
            type="number"
            placeholder="2016"
            onChange={(e) => handleFilter(texts.Año, e.target.value)}
          />
        ) : null}
        <Input
          placeholder="¿Qué película desea?"
          onChange={(e) => handleInput(e.target.value, moviesArray)}
        />
      </FiltersContainer>
      <Movies movies={moviesShow ? moviesShow : moviesArray} type={filter} />
    </MoviesContainer>
    <Footer/>
    </>
  );
};

export default Home;
