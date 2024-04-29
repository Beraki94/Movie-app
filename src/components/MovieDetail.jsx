import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import movieData from './movieData';
import ReactPlayer from 'react-player';

const MovieDetail = () => {
  let { id } = useParams();
    const movie = movieData.find(movie => String(movie.id) === id);

    return (
        <>
          <section key={id} className='moviedetail'>
            <ReactPlayer url={movie.videoUrl} width="2000px" height="300px"/>
            <h5>{movie.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus animi. Numquam minus optio quos veritatis rerum incidunt quas cumque.</h5>
          </section>
       </>
    )
}

export default MovieDetail