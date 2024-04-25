import React from 'react'

const MovieCard = (props) => {
  console.log(props);
  return (
    <div className='movie--card'>
        <img src= {props.Url} alt="" className="movie--card--url" />
        <div className="movie--card--text">
            <p className="title"><span>Title:</span> {props.title}</p>
            <p className="description"><span>Description:</span> {props.desc}</p>
            <p className="rating"><span>Rating:</span> {props.rating}</p>
        </div>
        
    </div>
  )
}

export default MovieCard