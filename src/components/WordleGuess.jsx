import "./WordleGuess.css"

export default function WordleGuess({guess, answer, onNewGuess}) {

    let guessArray = guess.toUpperCase().split('')
    let answerArray = answer.toUpperCase().split('')
    let displayColors = ['grey-letter','grey-letter','grey-letter','grey-letter','grey-letter']

    for (let i=0; i<5; i++){
        if (guessArray[i] === answerArray[i]){
            displayColors[i] = 'green-letter'
            guessArray[i] = ''
            answerArray[i] = ''
        }
    }

    for (let i=0; i<5; i++){
        if (displayColors[i] !== 'green-letter'){
            if (answerArray.indexOf(guessArray[i]) !== -1){
                displayColors[i] = 'yellow-letter'
                answerArray[answerArray.indexOf(guessArray[i])] = ''
                guessArray[i] = ''
            }
        }
    }

    return <div className="wordle-guess-wrapper">
        {displayColors.map((color, idx) => {
            return <div key={idx} className={color}>{guess[idx].toUpperCase()}</div>
        })}
    </div>
}