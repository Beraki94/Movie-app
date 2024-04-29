import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  console.log(props);
  return (
    <Link to={`/${props.id}`}>
      <div className='movie--card'>
          <img src= {props.Url} alt="" className="movie--card--url" />
          <div className="movie--card--text">
              <p className="title"><span>Title:</span> {props.title}</p>
              <p className="description"><span>Description:</span> {props.desc}</p>
              <p className="rating"><span>Rating:</span> {props.rating}</p>
          </div>
      </div>
    </Link> 
  )
}

export default MovieCard