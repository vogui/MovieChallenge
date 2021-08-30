import React, { useEffect, useState } from "react";
import { MoviesContainer, Input, FiltersContainer, InputAño } from "./styles";
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
    }
    setVariable(variable);
  };

  const handleInput = (value) => {
    let newArray = moviesArray.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase())
    );
    setMoviesShow(newArray);
  };

  const handleFilter = (value) => {
    let newArray = [];
    switch (value) {
      case "Pelicula":
        moviesArray.map((movie) => {
          if (movie.programType === "movie") {
            return newArray.push(movie);
          }
        });
        setMoviesShow(newArray);
        break;
      case "Serie":
        moviesArray.map((movie) => {
          if (movie.programType === "series") {
            return newArray.push(movie);
          }
        });
        setMoviesShow(newArray);
      case "Año":
        moviesArray.map((movie) => {
          let y = parseInt(year);
          if (movie.releaseYear === parseInt(year)) {
            return newArray.push(movie);
          }
        });
        setMoviesShow(newArray);
        break;
      default:
        newArray = [];
    }
  };

  const handleOrder = (value) => {
    let helperArray = [];
    let newArray = [];
    switch (value) {
      case "Nombre":
        moviesArray.map((movie) => helperArray.push(movie.title));
        helperArray.sort().map((title) => {
          moviesArray.map((movie) => {
            if (movie.title === title) {
              return newArray.push(movie);
            }
          });
        });
        setMoviesShow(newArray);
        break;
      case "Año":
        moviesArray.map((movie) => helperArray.push(movie.releaseYear));
        helperArray
          .sort(function (a, b) {
            return a - b;
          })
          .map((year) => {
            moviesArray.map((movie) => {
              if (movie.releaseYear === year) {
                if (!newArray.includes(movie)) {
                  return newArray.push(movie);
                }
              }
            });
          });
        setMoviesShow(newArray);
      default:
        newArray = [];
    }
  };

  useEffect(() => getMovies(), []);
  useEffect(() => {
    handleInput(name);
  }, [name]);
  useEffect(() => {
    handleOrder(order);
  }, [order]);
  useEffect(() => {
    handleFilter(filter);
  }, [filter, year]);

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
        {filter === "Año" ? (
          <InputAño
            placeholder="Año"
            onChange={(e) => handleChange(setYear, e.target.value)}
          />
        ) : null}
        <Input
          placeholder="Que pelicula desea"
          onChange={(e) => handleChange(setName, e.target.value)}
        />
      </FiltersContainer>
      <Movies movies={moviesShow.length > 0 ? moviesShow : moviesArray} />
    </MoviesContainer>
  );
};

export default Home;
