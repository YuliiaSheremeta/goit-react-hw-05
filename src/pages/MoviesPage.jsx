import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useDebounce } from 'use-debounce';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from '../components/SearchForm/SearchForm'
import { searchMovies } from "../moviesApi";

export default function MoviesPage() {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const handleSubmit = value => { 
    setSearchParams({query: value})
  };

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        const data = await searchMovies(query);
        setMovies(data);
      };
       getMovies(); 
   }
    }, [query]);

       return (
    <div>
      <h1 style={{ textAlign: 'center', fontStyle: 'italic', color: '#4CAF50' }}>Search Movies</h1>
      <SearchForm onSubmit={handleSubmit}/>
      <MovieList movies={movies}/>
    </div>
  )
 };