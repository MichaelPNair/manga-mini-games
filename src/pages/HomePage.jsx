import MainTitle from "../components/MainTitle";
import SelectGames from "../components/SelectGames";

export default function HomePage({onClickGuess, onClickDoku, onClickWordle, onClickGameWordle, onClickMovieWordle, user}) {

    return <div>
        <MainTitle/>
        <SelectGames onClickGuess={onClickGuess} onClickDoku={onClickDoku} onClickWordle={onClickWordle} onClickGameWordle={onClickGameWordle} onClickMovieWordle={onClickMovieWordle}/>
        <p>Website designed and built by <a href="https://github.com/MichaelPNair">Michael Nair</a></p>

    </div>
}