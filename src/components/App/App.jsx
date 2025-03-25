import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import MoviesPage from '../../pages/MoviesPage';
import HomePage from '../../pages/HomePages';
import NotFoundPage from '../../pages/NotFoundPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import CastDetails from '../CastDetails/CastDetails';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';


export default function App() {
  
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="/movies/:movieId" component={MovieDetailsPage}>
          <Route path='cast' element={<CastDetails/>} />
          <Route path='reviews' element={<ReviewsDetails/>} />
        </Route>
        <Route path='*' element={<NotFoundPage/> } />
      </Routes> 
    </>
  )
}


