import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../Utils/constants'
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingmovie = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowplayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        !nowPlayingMovies && getNowplayingMovies();
    }, []);

};
export default useNowPlayingmovie;
