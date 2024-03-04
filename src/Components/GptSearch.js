import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../Utils/constants";



const GptSearch = () => {
    return (
        <div>
            <div className=" absolute -z-10">
                <img
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