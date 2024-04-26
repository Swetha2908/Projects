import React from 'react'
import './MovieCard.css'
import star from '../../assets/star.png'

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className='movie-card'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie starwars" className='movie-poster'/>
  
    <div className="movie-details">
    <h3 className="movie-details-heading">{movie.original_title}</h3>
    <div className="movie-date-rate">
        <p>{movie.release_date}</p>
        <p>{movie.rate_average}<img src={star} alt="rating-icon" className='card-emoji'/> </p>
    
    </div>
    <p className='movie-des'>
   {movie.overview.slice(0,100)+"..."}
    </p>
</div>   </a>


  )
}

export default MovieCard