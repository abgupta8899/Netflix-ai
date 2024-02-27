import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingmovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';


function Browse() {
  useNowPlayingmovie();
  usePopularMovies();

  return (

    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browse;
