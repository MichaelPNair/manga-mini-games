import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";


export default function GuessTheManga({onClickHome, user}) {

    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Guess The Manga</h2>
        <p>What manga am I thinking of?</p>
        {user ? <p>Unique games won: 0</p> : false}
        <input type="text" />
        <p>details of guesses, probably a component of its own</p>


    </div>
}