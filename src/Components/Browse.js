import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingmovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


function Browse() {
  useNowPlayingmovie();

  return (

    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browse;
