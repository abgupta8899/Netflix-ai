import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../Utils/constants";



const GptSearch = () => {
    return (
        <div>
            <div className=" fixed -z-10">
                <img className="opacity-80"
                    src={BG_URL}
                    alt="background"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>

    );
};
export default GptSearch;