import {  Suspense, useEffect, useState, useRef } from "react";
import { NavLink, useParams, Link, useLocation, Outlet } from "react-router-dom";
import { fetchMoviesById } from '../moviesApi';
import MovieReviews from '../components/MovieReviews/MoviesReviews'

export default function MovieDetailsPage() { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || '/');

    useEffect(() => {
        const getMovies = async () => {
            try {
             setIsLoading(true);
             setError(false);
             const data = await fetchMoviesById (movieId);
             setMovie(data);
             
         } catch {
            setError(true);
         }  finally {
        setIsLoading(false);
      }  
        }
        getMovies();
    },[movieId])

    return (
        <div>
            <Link to={backLinkRef.current}>Go back</Link>

              {isLoading && <b>Loading...</b>}
              {error && <b>Error...</b>}
              {movie && <MovieReviews movie={movie} />}
            <p>Additional information</p>
            <ul>
                <li>
                    <NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
                    <NavLink to='reviews'>Reviews</NavLink>
                </li>
            </ul>

         <Suspense fallback={<div>Loading cast or reviews</div>}>
             <Outlet />
            </Suspense>
        </div>
    )
};