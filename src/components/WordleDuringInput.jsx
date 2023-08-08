
export default function WordleDuringInput({text}) {

    return <div className="wordle-input-wrapper">
        {text[0] ? <div className="guess-letter">{text[0].toUpperCase()}</div> : <div className="empty-letter"></div> }
        {text[1] ? <div className="guess-letter">{text[1].toUpperCase()}</div> : <div className="empty-letter"></div>}
        {text[2] ? <div className="guess-letter">{text[2].toUpperCase()}</div> : <div className="empty-letter"></div>}
        {text[3] ? <div className="guess-letter">{text[3].toUpperCase()}</div> : <div className="empty-letter"></div>}
        {text[4] ? <div className="guess-letter">{text[4].toUpperCase()}</div> : <div className="empty-letter"></div>}
    </div>
}