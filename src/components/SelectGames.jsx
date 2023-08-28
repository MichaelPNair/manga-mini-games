
export default function SelectGames({onClickGuess, onClickDoku, onClickWordle, onClickGameWordle}) {

    return <div>

        {/* <p>Login to keep track of your wins!</p> */}
        <button onClick={onClickGameWordle}>Game Wordle</button>
        <button onClick={onClickWordle}>Manga Wordle</button>
        <button onClick={onClickGuess}>Guess the Manga</button>
        {/* <button onClick={onClickDoku}>Manga-doku</button> */}

        <p>This page was made with data sourced from the Mangadex v5 api</p>
    </div>
}