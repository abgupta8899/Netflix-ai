import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingmovie from '../hooks/useNowPlayingMovie';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingmovie();
  usePopularMovies();

  return (

    <div>
      <Header />
      {
        showGptSearch ? <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }







    </div>
  )
}

export default Browse;
