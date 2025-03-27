import { useParams } from 'react-router-dom';
import {fetchReviewsMovies} from '../../moviesApi'
import { useEffect, useState } from 'react';

export default function MoviesReviews() { 

  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviewsMovies(movieId)
      setReviews(data);
    }
    getReviews();
  },[movieId])

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );   

};



