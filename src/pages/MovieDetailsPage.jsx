import { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation} from "react-router-dom";
import { fetchMoviesById } from '../moviesApi';
import MovieCast from '../components/MovieCast/MovieCast'
import MovieReviews from '../components/MovieReviews/MoviesReviews'
import MovieInfo from '../components/MovieInfo/MovieInfo'


export default function MovieDetailsPage() { 

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || '/movies');

    useEffect(() => {

        if (!movieId) return;

        const getMovieDetails = async () => {
             
            setIsLoading(true);
            try {
            
                const data = await fetchMoviesById(movieId);
                setMovie(data);
                console.log(data);
             
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        getMovieDetails();
    },[movieId])

    return (
        <div>
            <Link to={backLinkRef.current}>Go back</Link>
            {isLoading && <b>Loading...</b>}
            {error && <b>{error}</b>}
            {movie && <MovieInfo movie={movie} />}
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li><Link to='cast' state={{ from: backLinkRef.current }}><MovieCast /></Link></li>
                    <li> <Link to='reviews' state={{ from: backLinkRef.current }}><MovieReviews /></Link></li>
                </ul>
            </div>
            
        </div>
    );
};
