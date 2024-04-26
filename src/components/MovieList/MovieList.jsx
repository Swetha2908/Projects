import React,{useEffect,useState} from 'react'
import './MovieList.css'
import './MovieCard.jsx'

import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard'

const MovieList = () => {
const[movies,setMovies]=useState([])

 useEffect(() =>{
fetchMovies();
 },[]);

 const fetchMovies= async()=>{
  const res= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=728560ffdc8c4ebfc44a0c25a8fe9f03"
  
  );
 const data= await res.json()
 setMovies(data.results)
 };

  return (
    <main>
        <section className="movie-List">
            <header className='align-center movie-list-header'>
                <h2 className='align-center movie-list-heading'>Popular<img src={Fire} alt="fire-emoji" 
                className='navbar-emoji'/></h2>

                <div className='align-center movie-list-fs'>
                    <ul className="align-center movie-filter">
                        <li className="movie-filter-item">8+ star</li>
                        <li className="movie-filter-item">7+ star</li>
                        <li className="movie-filter-item">6+ star</li>
                    </ul>

                    <select name="" id="" className="movie-sorting">
                      <option value="">SortBy</option>
                      <option value="">Date</option>
                      <option value="">Rating</option>
                      </select>
                    <select name="" id="" className="movie-sorting">
                      <option value="">Ascending</option>
                      <option value="">Decending</option>
                     </select>
                     </div>
                     </header>
       
                     <div className='movie-cards'>
                     {movies.map(movie=><MovieCard key={movie.id} movie={movie}></MovieCard>)}
                     </div>
                     </section>
                
           
    </main>
  )
}

export default MovieList