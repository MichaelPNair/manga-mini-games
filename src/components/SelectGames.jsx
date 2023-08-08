
export default function SelectGames({onClickGuess, onClickDoku, onClickWordle}) {

    return <div>

        <p>login to keep track of your wins!</p>
        <button onClick={onClickWordle}>Manga Wordle</button>
        <button onClick={onClickGuess}>Guess the Manga</button>
        <button onClick={onClickDoku}>Manga-doku</button>

        <p>This page was made with data sourced from the Mangadex v5 api</p>
    </div>
}