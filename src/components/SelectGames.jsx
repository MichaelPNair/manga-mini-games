import './SelectGames.css'

export default function SelectGames({onClickGuess, onClickDoku, onClickWordle, onClickGameWordle}) {

    return <div className='select-games'>

        {/* <p>Login to keep track of your wins!</p> */}
        <button onClick={onClickGameWordle}>Game Word Guesser</button>
        <button onClick={onClickWordle}>Mangdle</button>
        <button onClick={onClickGuess}>Guess the Manga</button>
        {/* <button onClick={onClickDoku}>Manga-doku</button> */}

        <p>Manga data is sourced from the Mangadex v5 api</p>
        <p>Video Game data is sourced from the RAWG api</p>
    </div>
}