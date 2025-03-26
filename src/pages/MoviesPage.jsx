import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useDebounce } from 'use-debounce';
import MovieList from "../components/MovieList/MovieList"
import { searchMovies } from "../moviesApi";

export default function MoviesPage() {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchText = (evn) => {
    const nextParams = new URLSearchParams(searchParams);

    if (evn.target.value !== '') {
      nextParams.set('query', evn.target.value);
    } else {
      nextParams.delete('query');
    
    }
    setSearchParams(nextParams);
  }

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
      <h1>Search Movies</h1>
      <input type="text" value={query} onChange={changeSearchText}/>
      <MovieList movies={movies}/>
    </div>
  )
 };