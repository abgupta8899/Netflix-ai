import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../Utils/constants'
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    };
    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, []);

};
export default usePopularMovies;
