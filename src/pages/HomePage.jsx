import MainTitle from "../components/MainTitle";
import SelectGames from "../components/SelectGames";

export default function HomePage({onClickGuess, onClickDoku, onClickWordle, onClickGameWordle, user}) {

    return <div>
        <MainTitle/>
        <SelectGames onClickGuess={onClickGuess} onClickDoku={onClickDoku} onClickWordle={onClickWordle} onClickGameWordle={onClickGameWordle}/>
        <p>Website designed and built by <a href="https://github.com/MichaelPNair">Michael Nair</a></p>

    </div>
}