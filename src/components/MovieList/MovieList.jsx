import { Link } from 'react-router-dom'
import MovieDetailsPage from '../../pages/MovieDetailsPage'


export default function MovieList({ movies }) { 
     if (movies.length === 0) {
        return <p>No movies found</p>;
    }
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id} >
                    <Link to={`/movies/${movie.id}`}><p>{movie.title}</p></Link>
                </li>
            ))}
        </ul>
    )
};