import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMoviesById } from '../../moviesApi';
const pathToImg = 'https://image.tmdb.org/t/p/w500';

export default function MoviesReviews({movie}) { 
    
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    
     useEffect(() => {
    async function getReviews() {
      const data = await fetchMoviesById(movieId);
      setMovieInfo(data);
    }

    getReviews();
  }, [movieId]);

    return (
        <div>
            <img src={`${pathToImg}${movieInfo.poster_path}`} alt={movieInfo.title} />
            <h1>{movieInfo.title}</h1>
             <p>User score : {`${(movieInfo.vote_average * 10).toFixed(0)}%`}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <p>{ movieInfo.genre_ids.join(', ')}</p>
           
        </div>
    );
};