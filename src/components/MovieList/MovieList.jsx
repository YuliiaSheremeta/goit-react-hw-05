import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

export default function MovieList({ movies }) { 
    const location = useLocation();
    
     if (movies.length === 0) {
        return <p>No movies found</p>;
    }
    return (
        <ul className={css.movielist}>
            {movies.map((movie) => (
                <li key={movie.id}  className={css.movieitem}>
                    <Link to={`/movies/${movie.id}`} state={{ from:location }}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.movieposter} />
                    </Link>
                </li>
            ))}
        </ul>
    )
};