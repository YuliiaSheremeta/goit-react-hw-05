import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) { 
    const location = useLocation();
    
     if (movies.length === 0) {
        return <p>No movies found</p>;
    }
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id} >
                    <Link to={`/movies/${movie.id}`} state={{ from:location }}>
                        <p>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
};