import MainTitle from "../components/MainTitle";
import SelectGames from "../components/SelectGames";

export default function HomePage({onClickGuess, onClickDoku, onClickWordle, user}) {

    return <div>
        <MainTitle/>
        <SelectGames onClickGuess={onClickGuess} onClickDoku={onClickDoku} onClickWordle={onClickWordle}/>

    </div>
}