import { useState } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";

const wordleAnswers = [
    {
        answer: 'guild',
        id: 1,
        manga: 'Black Madougushi Guild',
        mangaId: ''
    },
    {
        answer: 'piece',
        id: 2,
        manga: 'One Piece',
        mangaId: ''
    },
    {
        answer: 'great',
        id: 3,
        manga: 'Great Teacher Onizuka',
        mangaId: ''
    },
    {
        answer: 'grand',
        id: 4,
        manga: 'Grand Blue',
        mangaId: ''
    },
    {
        answer: 'march',
        id: 5,
        manga: 'March comes in like a lion',
        mangaId: ''
    },
    {
        answer: 'witch',
        id: 6,
        manga: 'witch hat atelier',
        mangaId: ''
    },
    {
        answer: 'voice',
        id: 7,
        manga: 'A Silent Voice',
        mangaId: ''
    },
    {
        answer: 'stray',
        id: 8,
        manga: 'Bungou Stray Dogs',
        mangaId: ''
    },
    {
        answer: 'punch',
        id: 9,
        manga: 'One Punch Man',
        mangaId: ''
    },
    {
        answer: 'plain',
        id: 10,
        manga: 'Shiori Experience: My Plain Self',
        mangaId: ''
    },
    {
        answer: 'slime',
        id: 11,
        manga: 'That Time I Got Reincarnated as a Slime',
        mangaId: ''
    },
    {
        answer: 'world',
        id: 12,
        manga: 'Rebuild World',
        mangaId: ''
    },
    {
        answer: 'demon',
        id: 13,
        manga: 'Demon Slayer',
        mangaId: ''
    },
    {
        answer: 'astro',
        id: 14,
        manga: 'Astro Boy',
        mangaId: ''
    },
    {
        answer: 'touch',
        id: 15,
        manga: 'Touch',
        mangaId: ''
    },
    {
        answer: 'ghoul',
        id: 16,
        manga: 'Tokyo Ghoul',
        mangaId: ''
    },
    {
        answer: 'quest',
        id: 17,
        manga: 'Dragon Quest Dai no Daiboken',
        mangaId: ''
    },
    {
        answer: 'black',
        id: 18,
        manga: 'Black butler',
        mangaId: ''
    },
    {
        answer: 'death',
        id: 19,
        manga: 'Death Note',
        mangaId: ''
    },
    {
        answer: 'flame',
        id: 20,
        manga: 'Flame of Recca',
        mangaId: ''
    },
    {
        answer: 'magic',
        id: 21,
        manga: 'Magi: The Labyrinth of Magic',
        mangaId: ''
    }
    
]


export default function MangaWordle({onClickHome, user}) {

    const [newGuessText, setNewGuessText] = useState('')

    const [guesses, setGuesses] = useState([])

    const [isWon, setIsWon] = useState(false)

    const [gameAnswer, setGameAnswer] = useState(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])

    function newGame(){
        setNewGuessText('')
        setGuesses([])
        setIsWon(false)
        setGameAnswer(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])
    }

    function handleWin(){
        setNewGuessText('')
        setIsWon(true)
    }
    
    function handleChange(e){
        if (e.target.value.length <= 5){
            setNewGuessText(e.target.value)
        } else {
            setNewGuessText(e.target.value.slice(0,5))
        }
    }

    function handleEnter(e){
        if (e.keyCode === 13) { 
            console.log('Enter key pressed')
            if (newGuessText.length === 5){
                setGuesses([...guesses, newGuessText])
                setNewGuessText('')
                if (newGuessText === gameAnswer.answer) {
                    handleWin()
                }
            }

        }
    }


    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Manga Wordle</h2>
        <button disabled={guesses.length === 0} onClick={newGame}>New Game</button>
        <p>Guess the word</p>
        {user ? <p>Unique games won: 0</p> : false}
        <p>{isWon ? `Congratulations! The word was ${gameAnswer.answer}!` : false }</p>
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        <WordleDuringInput text={newGuessText}/>

        <input value={newGuessText}  hidden={isWon} onChange={handleChange} onKeyDown={handleEnter} type="text" />


    </div>
}