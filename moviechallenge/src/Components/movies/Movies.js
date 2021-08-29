import React from 'react'
import CardMovies from './CardMovies'
import{ MovieContainer } from './styles'

const Movies = (props) => {
    return (
        <MovieContainer>{
            props.movies.map(movie =>(
                 <CardMovies movie ={movie}/>
            ))
            }
        </MovieContainer>
    )
}

export default Movies