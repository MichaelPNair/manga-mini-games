import { useState } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";

const wordleAnswers = [
    {
        answer: 'guild',
        id: 1,
        manga: `I May Be a Guild Receptionist, but I'll Solo Any Boss to Clock Out on Time`,
        mangaId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'piece',
        id: 2,
        manga: 'One Piece',
        mangaId: 'a1c7c817-4e59-43b7-9365-09675a149a6f'
    },
    {
        answer: 'great',
        id: 3,
        manga: 'Great Teacher Onizuka',
        mangaId: '02860cdf-1020-40f1-a23f-2025d80f6290'
    },
    {
        answer: 'grand',
        id: 4,
        manga: 'Grand Blue',
        mangaId: 'fffbfac3-b7ad-41ee-9581-b4d90ecec941'
    },
    {
        answer: 'march',
        id: 5,
        manga: 'March comes in like a lion',
        mangaId: '0ca1627e-95dd-4118-892a-f144adf02256'
    },
    {
        answer: 'witch',
        id: 6,
        manga: 'witch hat atelier',
        mangaId: '67e7453b-9ee5-4ae5-9316-215b03e4a71d'
    },
    {
        answer: 'voice',
        id: 7,
        manga: 'A Silent Voice',
        mangaId: '4bde51e5-e420-45a4-98e9-7405bf2d59ff'
    },
    {
        answer: 'stray',
        id: 8,
        manga: 'Bungou Stray Dogs',
        mangaId: '3fba42cf-2ad6-4c30-a7ab-46cb8149208a'
    },
    {
        answer: 'punch',
        id: 9,
        manga: 'One Punch Man',
        mangaId: 'd8a959f7-648e-4c8d-8f23-f1f3f8e129f3'
    },
    {
        answer: 'plain',
        id: 10,
        manga: 'Shiori Experience: My Plain Self',
        mangaId: 'd58abdf4-9268-41d8-9920-f8fe8858a173'
    },
    {
        answer: 'slime',
        id: 11,
        manga: 'That Time I Got Reincarnated as a Slime',
        mangaId: 'e78a489b-6632-4d61-b00b-5206f5b8b22b'
    },
    {
        answer: 'world',
        id: 12,
        manga: 'Rebuild World',
        mangaId: '99182618-ae92-4aec-a5df-518659b7b613'
    },
    {
        answer: 'demon',
        id: 13,
        manga: 'Demon Slayer',
        mangaId: '789642f8-ca89-4e4e-8f7b-eee4d17ea08b'
    },
    {
        answer: 'astro',
        id: 14,
        manga: 'Astro Boy',
        mangaId: 'ca4c84bb-7272-45aa-a22d-dc1282b52372'
    },
    {
        answer: 'touch',
        id: 15,
        manga: 'Touch',
        mangaId: '36b4c3d4-629d-45cb-b911-ae0906f6b544'
    },
    {
        answer: 'ghoul',
        id: 16,
        manga: 'Tokyo Ghoul',
        mangaId: '6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b'
    },
    {
        answer: 'quest',
        id: 17,
        manga: 'Dragon Quest Dai no Daiboken',
        mangaId: '3a3cfc32-357e-4b50-a660-5ce4b58dfcbc'
    },
    {
        answer: 'black',
        id: 18,
        manga: 'Black butler',
        mangaId: '8bd19e5c-94f7-4368-a918-50f463857446'
    },
    {
        answer: 'death',
        id: 19,
        manga: 'Death Note',
        mangaId: '75ee72ab-c6bf-4b87-badd-de839156934c'
    },
    {
        answer: 'flame',
        id: 20,
        manga: 'Flame of Recca',
        mangaId: 'fd3db4be-b2d0-41ab-895b-de5dc99b4f9d'
    },
    {
        answer: 'magic',
        id: 21,
        manga: 'Magi: The Labyrinth of Magic',
        mangaId: 'ce63e6b8-fad8-48bc-a2aa-d801fb8d5d43'
    },
    {
        answer: 'steel',
        id: 22,
        manga: 'Steel Ball Run',
        mangaId: 'b30dfee3-9d1d-4e8d-bfbe-8fcabc3c96f6'
    },
    {
        answer: 'titan',
        id: 23,
        manga: 'Attack on Titan',
        mangaId: '304ceac3-8cdb-4fe7-acf7-2b6ff7a60613'
    },
    {
        answer: 'pluto',
        id: 24,
        manga: 'Pluto',
        mangaId: 'e171c073-4415-499b-85bc-ea93825127ac'
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
        <p>{isWon ? `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!` : false }</p>
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        <WordleDuringInput text={newGuessText}/>

        <input value={newGuessText}  hidden={isWon} onChange={handleChange} onKeyDown={handleEnter} type="text" />


    </div>
}