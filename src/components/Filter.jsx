import React from 'react';
import { useState } from 'react';
import  movieData from './movieData';
import MovieCard from './MovieCard';

const Filter = () => {
  const [searchMovie, setSearchMovie] = useState("");

    const handleInputChange = (e) =>{
    setSearchMovie(e.target.value)
}
  return (
    
    <div>
      <input className='searchbar' type="text" value={searchMovie} placeholder='Search Movies' onChange={handleInputChange}/>
      
      <div className='movie--list'>
      {
        movieData.filter((item) => {
          return searchMovie == '' ? item : item.title.toLowerCase().includes(searchMovie.toLowerCase())
        } 
        )
        .map(movie => {
          return(
            <MovieCard key={movie.id}
              id={movie.id}
              Url= {movie.posterURL}
              title= {movie.title}
              desc = {movie.description}
              rating= {movie.rating}
            />
          )
        })
      }
      </div>
    </div>
  )
}

export default Filter