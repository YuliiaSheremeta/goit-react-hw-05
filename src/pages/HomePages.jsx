import { useEffect, useState } from "react";
import {fetchMovies} from '../moviesApi'
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() { 
    
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

    useEffect(() => {
      async function getMovies() {
        try {
        setIsLoading(true);
        setError(false);
            const data = await fetchMovies();
            setMovies(data);
            
        } catch{
           setError(true);
        }finally {
        setIsLoading(false);
      }
        }  
        getMovies();
    },[]);
    
    return (
        <div>
        <h1>Trending Today</h1>
         {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
          {movies.length > 0 &&  <MovieList movies={movies}/>} 
        </div>
    );
};
