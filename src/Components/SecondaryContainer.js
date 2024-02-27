import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

function SecondaryContainer() {
    const movies = useSelector((store) => store.movies);
    return (
        movies.popularMovies && movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-52  relative z-20">


                    <MovieList title={"Tending"} movies={movies.popularMovies} />
                    <MovieList title={"Top In India"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Romance"} movies={movies.nowPlayingMovies} />




                </div>

            </div>


        )
    );
}

export default SecondaryContainer;