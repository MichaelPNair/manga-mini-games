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
        movieId: 'tt0055614'
    },
    {
        answer: 'river',
        id: 22,
        movie: `The Bridge on the River Kwai`,
        movieId: 'tt0050212'
    },
    {
        answer: 'tramp',
        id: 23,
        movie: `Lady and the Tramp`,
        movieId: 'tt0048280'
    },
    {
        answer: 'under',
        id: 24,
        movie: `20,000 Leagues Under the Sea`,
        movieId: 'tt0046672'
    },
    {
        answer: 'white',
        id: 25,
        movie: `Snow White and the Seven Dwarfs`,
        movieId: 'tt0029583'
    },
    {
        answer: 'angry',
        id: 26,
        movie: `12 Angry Men`,
        movieId: 'tt0050083'
    },
    {
        answer: 'fight',
        id: 27,
        movie: `Fight Club`,
        movieId: 'tt0137523'
    },
    {
        answer: 'seven',
        id: 28,
        movie: `Seven Samurai`,
        movieId: 'tt0047478'
    },
    {
        answer: 'lambs',
        id: 29,
        movie: `The Silence of the Lambs`,
        movieId: 'tt0102926'
    },
    {
        answer: 'green',
        id: 30,
        movie: `The Green Mile`,
        movieId: 'tt0120689'
    },
    {
        answer: 'usual',
        id: 31,
        movie: `The Usual Suspects`,
        movieId: 'tt0114814'
    },
    {
        answer: 'grave',
        id: 32,
        movie: `Grave of the Fireflies`,
        movieId: 'tt0095327'
    },
    {
        answer: 'alien',
        id: 33,
        movie: `Alien`,
        movieId: 'tt0078748'
    },
    {
        answer: 'great',
        id: 34,
        movie: `The Great Dictator`,
        movieId: 'tt0032553'
    },
    {
        answer: 'north',
        id: 35,
        movie: `North by Northwest`,
        movieId: 'tt0053125'
    },
    {
        answer: 'metal',
        id: 36,
        movie: `Full Metal Jacket`,
        movieId: 'tt0093058'
    },
    {
        answer: 'blood',
        id: 37,
        movie: `There Will Be Blood`,
        movieId: 'tt0469494'
    },
    {
        answer: 'sense',
        id: 38,
        movie: `The Sixth Sense`,
        movieId: 'tt0167404'
    },
    {
        answer: 'grail',
        id: 39,
        movie: `Monty Python and the Holy Grail`,
        movieId: 'tt0071853'
    },
    {
        answer: 'thing',
        id: 40,
        movie: `The Thing`,
        movieId: 'tt0084787'
    },
    {
        answer: 'catch',
        id: 41,
        movie: `Catch Me If You Can`,
        movieId: 'tt0264464'
    },
    {
        answer: 'blade',
        id: 42,
        movie: `Blade Runner`,
        movieId: 'tt0083658'
    },
    {
        answer: 'slave',
        id: 43,
        movie: `12 Years a Slave`,
        movieId: 'tt2024544'
    },
    {
        answer: 'hotel',
        id: 44,
        movie: `The Grand Budapest Hotel`,
        movieId: 'tt2278388'
    },
    {
        answer: 'poets',
        id: 45,
        movie: `Dead Poets Society`,
        movieId: 'tt0097165'
    },
    {
        answer: 'train',
        id: 46,
        movie: `How to Train Your Dragon`,
        movieId: 'tt0892769'
    },
    {
        answer: 'stand',
        id: 47,
        movie: `Stand By Me`,
        movieId: 'tt0092005'
    },
    {
        answer: 'curse',
        id: 48,
        movie: `Pirates of the Caribbean: The Curse of the Black Pearl`,
        movieId: 'tt0325980'
    },
    {
        answer: 'giant',
        id: 49,
        movie: `The Iron Giant`,
        movieId: 'tt0129167'
    },
    {
        answer: 'ducks',
        id: 50,
        movie: `The Mighty Ducks`,
        movieId: 'tt0104868'
    },
    {
        answer: 'queen',
        id: 51,
        movie: `Queen of Katwe`,
        movieId: 'tt4341582'
    },
    {
        answer: 'honey',
        id: 52,
        movie: `Honey, I Shrunk the Kids`,
        movieId: 'tt0097523'
    },
    {
        answer: 'bound',
        id: 53,
        movie: `Homeward Bound: The Incredible Journey`,
        movieId: 'tt0107131'
    },
    {
        answer: 'brave',
        id: 54,
        movie: `Brave`,
        movieId: 'tt1217209'
    },
    {
        answer: 'world',
        id: 55,
        movie: `Scott Pilgrim Vs. The World`,
        movieId: 'tt0446029'
    },
    {
        answer: 'extra',
        id: 56,
        movie: `E.T. – The Extra Terrestrial`,
        movieId: 'tt0083866'
    },
    {
        answer: 'point',
        id: 57,
        movie: `Point Break`,
        movieId: 'tt0102685'
    },
    {
        answer: 'heart',
        id: 58,
        movie: `Whisper of the Heart`,
        movieId: 'tt0113824'
    },
    {
        answer: 'rises',
        id: 59,
        movie: `The Wind Rises`,
        movieId: 'tt2013293'
    },
    {
        answer: 'drive',
        id: 60,
        movie: `Mulholland Drive`,
        movieId: 'tt0166924'
    },
    {
        answer: 'night',
        id: 61,
        movie: `Night of the Living Dead`,
        movieId: 'tt0063350'
    },
    {
        answer: 'witch',
        id: 62,
        movie: `The Blair Witch Project`,
        movieId: 'tt0185937'
    },
    {
        answer: 'naked',
        id: 63,
        movie: `The Naked Gun`,
        movieId: 'tt0095705'
    },
    {
        answer: 'lions',
        id: 64,
        movie: `Four Lions`,
        movieId: 'tt1341167'
    },
    {
        answer: 'blues',
        id: 65,
        movie: `The Blues Brothers`,
        movieId: 'tt0080455'
    },
    {
        answer: 'world',
        id: 66,
        movie: `Wayne's World`,
        movieId: 'tt0105793'
    },
    {
        answer: 'cable',
        id: 67,
        movie: `The Cable Guy`,
        movieId: 'tt0115798'
    },
    {
        answer: 'royal',
        id: 68,
        movie: `The Royal Tenenbaums`,
        movieId: 'tt0265666'
    },
    {
        answer: 'magic',
        id: 69,
        movie: `Magic Mike`,
        movieId: 'tt1915581'
    },
    {
        answer: 'girls',
        id: 70,
        movie: `Mean Girls`,
        movieId: 'tt0377092'
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
                if (guesses.length > 0){
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
                    if (guesses.length > 0){
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