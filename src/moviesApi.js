import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDEwYTgzMmE0ZWU4NmRiYWQ5Mjc1MTVhZTFjY2QyYyIsIm5iZiI6MTc0MjgzOTQ2MS4wNzcsInN1YiI6IjY3ZTE5ZWE1ZDcwYzYxNTkwMzc1YjlhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QXCD6cNex1WI4Tk1UPtJ3uZw1XZj2daTAw3SwMvkG-E';



export const fetchMovies = async () => {
 
  const resp = await axios.get(`${url}/trending/movie/day`, {
    params: {
       language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
    });
  
    return resp.data.results; 
 
};

export const fetchMoviesById = async (movieId) => {

  const resp = await axios.get(`${url}/movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });
  return resp.data;
};

export const searchMovies = async (query) => {

  const resp = await axios.get(`${url}/search/movie`, {
    params: {
      language: 'en-US',
      include_adult: false,
      query: query,
    },
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });
  return resp.data.results;
};

export const fetchReviewsMovies = async (movieId) => {
   const resp = await axios.get(`${url}/movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });
  return resp.data.results;
}


export const fetchCreditsMovies = async (movieId) => {
   const resp = await axios.get(`${url}/movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
   });

  return resp.data.cast;
}