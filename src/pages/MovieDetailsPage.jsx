import { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation} from "react-router-dom";
import { fetchMoviesById } from '../moviesApi';
import MovieCast from '../components/MovieCast/MovieCast'
import MovieReviews from '../components/MovieReviews/MoviesReviews'

const pathToImg = 'https://image.tmdb.org/t/p/w500';
export default function MovieDetailsPage() { 

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || '/movies');

    useEffect(() => {
        const getMovieDetails = async () => {
             
            setIsLoading(true);
            try {
            
             const data = await fetchMoviesById (movieId);
             setMovie(data);
             
         } catch(err) {
            setError(err.message);
         }  finally {
        setIsLoading(false);
      }  
        }
        getMovieDetails();
    },[movieId])

    return (
        <div>
            <Link to={backLinkRef.current}>Go back</Link>

              {isLoading && <b>Loading...</b>}
              {error && <b>{error}</b>}
            {movie && <div><img src={`${pathToImg}${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
             <p>User score : {`${(movie.vote_average * 10).toFixed(0)}%`}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{ movie.genre_ids ? movie.genre_ids.map(genre=> genre.name).join(', '): 'No genres available'}</p></div>}
        <h2>Additional information</h2>
        <ul>
           <li><Link to='/movies/:movieId/cast'><MovieCast /></Link></li> 
          <li> <Link to='/movies/:movieId/reviews'><MovieReviews /></Link></li>
          </ul>
           </div>
    )
};
 