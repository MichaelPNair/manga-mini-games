import { useRef, useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";
import WordleKeyboard from "../components/WordleKeyboard";
import DisplayManga from "../components/DisplayManga";
import './MovieWordle.css'
import { getWinCounts, updateMangaWordleCount } from "../utils/updateGameCount";
import DisplayMovie from "../components/DisplayMovie";

const wordleAnswers = [
    {
        answer: 'water',
        id: 1,
        movie: `Avatar: The Way of Water`,
        movieId: 'tt1630029'
    },
    {
        answer: 'force',
        id: 2,
        movie: `Star Wars: The Force Awakens`,
        movieId: 'tt2488496'
    },
    {
        answer: 'world',
        id: 3,
        movie: `Jurassic World`,
        movieId: 'tt0369610'
    },
    {
        answer: 'movie',
        id: 4,
        movie: `The Super Mario Bros. Movie`,
        movieId: 'tt6718170'
    },
    {
        answer: 'black',
        id: 5,
        movie: `Black Panther`,
        movieId: 'tt1825683'
    },
    {
        answer: 'beast',
        id: 6,
        movie: `Beauty and the Beast`,
        movieId: 'tt2771200'
    },
    {
        answer: 'civil',
        id: 7,
        movie: `Captain America: Civil War`,
        movieId: 'tt3498820'
    },
    {
        answer: 'rings',
        id: 8,
        movie: `The Lord of the Rings: The Return of the King`,
        movieId: 'tt0167260'
    },
    {
        answer: 'rises',
        id: 9,
        movie: `The Dark Knight Rises`,
        movieId: 'tt1345836'
    },
    {
        answer: 'joker',
        id: 10,
        movie: `Joker`,
        movieId: 'tt7286456'
    },
    {
        answer: 'story',
        id: 11,
        movie: `Toy Story 4`,
        movieId: 'tt1979376'
    },
    {
        answer: 'chest',
        id: 12,
        movie: `Pirates of the Caribbean: Dead Man's Chest`,
        movieId: 'tt0383574'
    },
    {
        answer: 'rogue',
        id: 13,
        movie: `Rogue One: A Star Wars Story`,
        movieId: 'tt3748528'
    },
    {
        answer: 'tides',
        id: 14,
        movie: `Pirates of the Caribbean: On Stranger Tides`,
        movieId: 'tt1298650'
    },
    {
        answer: 'sound',
        id: 15,
        movie: `The Sound of Music`,
        movieId: 'tt0059742'
    },
    {
        answer: 'music',
        id: 16,
        movie: `The Sound of Music`,
        movieId: 'tt0059742'
    },
    {
        answer: 'train',
        id: 17,
        movie: `Demon Slayer: Mugen Train`,
        movieId: 'tt11032374'
    },
    {
        answer: 'fatal',
        id: 18,
        movie: `Fatal Attraction`,
        movieId: 'tt0093010'
    },
    {
        answer: 'rocky',
        id: 19,
        movie: `Rocky`,
        movieId: 'tt0075148'
    },
    {
        answer: 'space',
        id: 20,
        movie: `2001: A Space Odyssey`,
        movieId: 'tt0062622'
    },
    {
        answer: 'story',
        id: 21,
        movie: `West Side Story`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'river',
        id: 22,
        movie: `The Bridge on the River Kwai`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'tramp',
        id: 23,
        movie: `Lady and the Tramp`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'under',
        id: 24,
        movie: `20,000 Leagues Under the Sea`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'white',
        id: 25,
        movie: `Snow White and the Seven Dwarfs`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'angry',
        id: 26,
        movie: `12 Angry Men`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'fight',
        id: 27,
        movie: `Fight Club`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'seven',
        id: 28,
        movie: `Seven Samurai`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'lambs',
        id: 29,
        movie: `The Silence of the Lambs`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'green',
        id: 30,
        movie: `The Green Mile`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'usual',
        id: 31,
        movie: `The Usual Suspects`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'grave',
        id: 32,
        movie: `Grave of the Fireflies`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'alien',
        id: 33,
        movie: `Alien`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'great',
        id: 34,
        movie: `The Great Dictator`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'north',
        id: 35,
        movie: `North by Northwest`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'metal',
        id: 36,
        movie: `Full Metal Jacket`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'blood',
        id: 37,
        movie: `There Will Be Blood`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'sense',
        id: 38,
        movie: `The Sixth Sense`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'grail',
        id: 39,
        movie: `Monty Python and the Holy Grail`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'thing',
        id: 40,
        movie: `The Thing`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'catch',
        id: 41,
        movie: `Catch Me If You Can`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'blade',
        id: 42,
        movie: `Blade Runner`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'slave',
        id: 43,
        movie: `12 Years a Slave`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'hotel',
        id: 44,
        movie: `The Grand Budapest Hotel`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'poets',
        id: 45,
        movie: `Dead Poets Society`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'train',
        id: 46,
        movie: `How to Train Your Dragon`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'stand',
        id: 47,
        movie: `Stand By Me`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'curse',
        id: 48,
        movie: `Pirates of the Caribbean: The Curse of the Black Pearl`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'giant',
        id: 49,
        movie: `The Iron Giant`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'ducks',
        id: 50,
        movie: `The Mighty Ducks`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'queen',
        id: 51,
        movie: `Queen of Katwe`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'honey',
        id: 52,
        movie: `Honey, I Shrunk the Kids`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'bound',
        id: 53,
        movie: `Homeward Bound: The Incredible Journey`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'brave',
        id: 54,
        movie: `Brave`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'world',
        id: 55,
        movie: `Scott Pilgrim Vs. The World`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'extra',
        id: 56,
        movie: `E.T. – The Extra Terrestrial`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'point',
        id: 57,
        movie: `Point Break`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'heart',
        id: 58,
        movie: `Whisper of the Heart`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'rises',
        id: 59,
        movie: `The Wind Rises`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'drive',
        id: 60,
        movie: `Mulholland Drive`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'night',
        id: 61,
        movie: `Night of the Living Dead`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'witch',
        id: 62,
        movie: `The Blair Witch Project`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'naked',
        id: 63,
        movie: `The Naked Gun`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'lions',
        id: 64,
        movie: `Four Lions`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'blues',
        id: 65,
        movie: `The Blues Brothers`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'world',
        id: 66,
        movie: `Wayne's World`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'cable',
        id: 67,
        movie: `The Cable Guy`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'royal',
        id: 68,
        movie: `The Royal Tenenbaums`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'magic',
        id: 69,
        movie: `Magic Mike`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'girls',
        id: 70,
        movie: `Mean Girls`,
        movieId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    }
    
]


export default function MovieWordle({onClickHome, user}) {

    const [newGuessText, setNewGuessText] = useState('')

    const [guesses, setGuesses] = useState([])

    const [isFinished, setIsFinished] = useState(false)
    const [isWon, setIsWon] = useState(false)

    const [gameAnswer, setGameAnswer] = useState(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])

    const [countFromAPI, setCountFromAPI] = useState(null)
    const [selectedId, setSelectedId] = useState(gameAnswer.id)

    const [keyboardColor, setKeyboardColor] = useState({
        a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
    })

    const inputRef = useRef(null)

    const topRef = useRef()
    const bottomRef = useRef()

    useEffect(() => {
        if (user) {
            getWinCounts()
                .then(res => {
                    setCountFromAPI(res.data.wordleWins)
                })
        }

    }, [user])

    useEffect(() => {
        if(!isFinished){
            inputRef.current.focus()
        }
        

    }, [isFinished])




    function handleNewGame(){
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        let randomId = Math.floor(Math.random()* wordleAnswers.length)
        setGameAnswer(wordleAnswers[randomId])
        setSelectedId(randomId + 1)
    }

    async function handleWin(){
        setNewGuessText('')
        setIsFinished(true)
        setIsWon(true)
        scrollToTop()
        if(user) {
            await updateMangaWordleCount(user.username)
            setCountFromAPI(countFromAPI + 1)
        }
    }

    function handleGiveUp(){
        setNewGuessText('')
        setIsFinished(true)
        scrollToTop()
    }
    
    function handleChange(e){
        if (e.target.value.match(/^[a-zA-Z]*$/)){
            if (e.target.value.length <= 5){
                setNewGuessText(e.target.value)
            } else {
                setNewGuessText(e.target.value.slice(0,5))
            }
        }
    }

    function onKeyboardClick(e){
        if (newGuessText.length < 5){
            setNewGuessText(text => text + e.target.innerText.toLowerCase())
            inputRef.current.focus()
        }
    }

    function scrollToBottom(){
        bottomRef.current.scrollIntoView()
    }

    function scrollToTop(){
        topRef.current.scrollIntoView()
    }

    function handleSymbolClick(){
        if (newGuessText.length === 5){
            setGuesses([...guesses, newGuessText.toLowerCase()])
            changeKeyboardColor(newGuessText.toLowerCase())
            setNewGuessText('')
            if (newGuessText.toLowerCase() === gameAnswer.answer) {
                handleWin()
            } else {
                if (guesses.length > 1){
                    scrollToBottom()
                }
                inputRef.current.focus()
            }
        }
    }

    function handleEnter(e){
        if (e.keyCode === 13) {
            if (newGuessText.length === 5){
                setGuesses([...guesses, newGuessText.toLowerCase()])
                changeKeyboardColor(newGuessText.toLowerCase())
                setNewGuessText('')
                if (newGuessText.toLowerCase() === gameAnswer.answer) {
                    handleWin()
                } else {
                    if (guesses.length > 1){
                        scrollToBottom()
                    }
                    inputRef.current.focus()
                }
            }
        }
    }

    function changeKeyboardColor(newGuessText){
        let guessArray = newGuessText.toUpperCase().split('')
        let answerArray = gameAnswer.answer.toUpperCase().split('')

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

        for (let i=0; i<5; i++){
            if(displayColors[i] === 'grey-letter' && keyboardColor[newGuessText[i].toLowerCase()] === 'plain-key'){
                updateKeyboard(newGuessText[i].toLowerCase() , 'grey-key')
            }
        }
        for (let i=0; i<5; i++){
            if(displayColors[i] === 'yellow-letter' && !(keyboardColor[newGuessText[i].toLowerCase()] === 'green-key')){
                updateKeyboard(newGuessText[i].toLowerCase() , 'yellow-key')
            }
        } 
        for (let i=0; i<5; i++){
            if(displayColors[i] === 'green-letter'){
                updateKeyboard(newGuessText[i].toLowerCase() , 'green-key')
            }
        } 
    }

    function updateKeyboard(letter, color){
        setKeyboardColor(keyboard => ({...keyboard, [letter]: color}))
    }

    function handleSelectChange(e){
        setSelectedId(e.target.value)
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        setGameAnswer(wordleAnswers[e.target.value - 1])
        inputRef.current.focus()
    }

    function gameIdSelect(selectedId){
        return <>
            <label >Game Number: </label>
            <select onChange={handleSelectChange} value={selectedId}>
                {wordleAnswers.map((answer, index) => {
                    return <option key={index}>{index + 1}</option>
                })}
            </select>
        </>
    }


    return <div className="movie-wordle">
        <div ref={topRef}></div>
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Movie Word Guesser</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Random Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give Up</button>
        <p>{`Guess the word! (Bonus challenge: Name a movie with each guess)`}</p>
        {gameIdSelect(selectedId)}
        {user && <p>You have won {countFromAPI} times</p>}
        <p>{isWon && `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1).toLowerCase()}!`}</p>
        {isFinished && <DisplayMovie movieId={gameAnswer.movieId} movieAnswerName={gameAnswer.movie}/>}
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        {!isFinished && <WordleDuringInput text={newGuessText}/>}

        <input autoFocus ref={inputRef} value={newGuessText}  hidden={isFinished} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <span hidden={!(newGuessText.length === 5)} onClick={handleSymbolClick} className="enter-symbol">⏎</span>
        <WordleKeyboard keyboardColor={keyboardColor} onClick={onKeyboardClick}/>
        <div ref={bottomRef}></div>


    </div>
}