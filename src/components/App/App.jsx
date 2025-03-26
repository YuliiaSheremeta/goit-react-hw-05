
import { Routes, Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import { lazy, Suspense } from "react";

const HomePage = lazy(()=> import('../../pages/HomePages'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(()=> import('../../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('../../components/MovieReviews/MoviesReviews'))
const NotFoundPage = lazy(()=> import('../../pages/NotFoundPage'));


export default function App() {
  
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
          <Route path='cast' element={<MovieCast/>} />
          <Route path='reviews' element={<MovieReviews/>} />
        </Route>
        <Route path='*' element={<NotFoundPage/> } />
        </Routes> 
        </Suspense>
    </div>
  )
}


