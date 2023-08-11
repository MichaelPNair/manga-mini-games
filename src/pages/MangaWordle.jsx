import { useRef, useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";
import WordleKeyboard from "../components/WordleKeyboard";
import DisplayManga from "../components/DisplayManga";
import './MangaWordle.css'
import { getWinCounts, updateMangaWordleCount } from "../utils/updateGameCount";

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
    },
    {
        answer: 'akira',
        id: 25,
        manga: 'Akira',
        mangaId: '175cf215-2122-4656-9fac-37ac092438af'
    },
    {
        answer: 'stone',
        id: 26,
        manga: 'Dr. Stone',
        mangaId: 'cfc3d743-bd89-48e2-991f-63e680cc4edf'
    },
    {
        answer: 'ocean',
        id: 27,
        manga: 'Jojos bizzare adventure stone ocean',
        mangaId: 'ea57752d-acb7-469e-aa60-43e694ded9a9'
    },
    {
        answer: 'north',
        id: 28,
        manga: 'Fist of the North Star',
        mangaId: '75251a47-952c-4e38-b1c6-3572b9bfd481'
    },
    {
        answer: 'conan',
        id: 29,
        manga: 'Detective Conan',
        mangaId: '7f30dfc3-0b80-4dcc-a3b9-0cd746fac005'
    },
    {
        answer: 'metal',
        id: 30,
        manga: 'Fullmetal Alchemist',
        mangaId: 'dd8a907a-3850-4f95-ba03-ba201a8399e3'
    },
    {
        answer: 'fairy',
        id: 31,
        manga: 'Fairy Tail',
        mangaId: '227e3f72-863f-46f9-bafe-c43104ca29ee'
    },
    {
        answer: 'major',
        id: 32,
        manga: 'Major',
        mangaId: '491aba94-e971-4911-8a93-0b1200403f4b'
    },
    {
        answer: 'glass',
        id: 33,
        manga: 'Glass Mask',
        mangaId: '51fe4713-013a-4acc-8874-bfd01b60eff9'
    },
    {
        answer: 'saint',
        id: 34,
        manga: 'Saint Seiya',
        mangaId: '67bc662a-dba4-4616-9da0-fa0e18e87383'
    },
    {
        answer: 'crest',
        id: 35,
        manga: 'Crest of the Royal Family',
        mangaId: 'a0861345-be1a-4f4d-97bb-6310b91cb32b'
    },
    {
        answer: 'slump',
        id: 36,
        manga: 'dr Slump',
        mangaId: '985e4ae6-7a36-42c5-ae12-f4291c58798c'
    },
    {
        answer: 'index',
        id: 37,
        manga: 'A Certain Magical Index',
        mangaId: '229e5177-2e71-4642-bd56-a9b0b0ba0e60'
    },
    {
        answer: 'space',
        id: 38,
        manga: 'Space Brothers',
        mangaId: 'a437129d-18e9-48d7-9484-9fb9b9073ddd'
    },
    {
        answer: 'happy',
        id: 39,
        manga: 'happy!',
        mangaId: 'd670572b-d21a-474c-a03d-7ec50bd53030'
    }
    
]


export default function MangaWordle({onClickHome, user}) {

    const [newGuessText, setNewGuessText] = useState('')

    const [guesses, setGuesses] = useState([])

    const [isFinished, setIsFinished] = useState(false)
    const [isWon, setIsWon] = useState(false)

    const [gameAnswer, setGameAnswer] = useState(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])

    const [countFromAPI, setCountFromAPI] = useState(null)

    const [keyboardColor, setKeyboardColor] = useState({
        a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
    })

    const inputRef = useRef(null)

    useEffect(() => {
        if (user) {
            getWinCounts()
                .then(res => {
                    setCountFromAPI(res.data.wordleWins)
                })
        }

    }, [user])




    function handleNewGame(){
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        setGameAnswer(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])
        inputRef.current.focus()
    }

    async function handleWin(){
        setNewGuessText('')
        setIsFinished(true)
        setIsWon(true)
        if(user) {
            await updateMangaWordleCount(user.username)
            setCountFromAPI(countFromAPI + 1)
        }
    }

    function handleGiveUp(){
        setNewGuessText('')
        setIsFinished(true)
    }
    
    function handleChange(e){
        if (e.target.value.length <= 5){
            setNewGuessText(e.target.value)
        } else {
            setNewGuessText(e.target.value.slice(0,5))
        }
    }

    function onKeyboardClick(e){
        if (newGuessText.length < 5){
            setNewGuessText(text => text + e.target.innerText.toLowerCase())
            inputRef.current.focus()
        }
    }

    function handleSymbolClick(){
        if (newGuessText.length === 5){
            setGuesses([...guesses, newGuessText])
            changeKeyboardColor(newGuessText)
            setNewGuessText('')
            if (newGuessText === gameAnswer.answer) {
                handleWin()
            } else {
                inputRef.current.focus()
            }
        }
    }

    function handleEnter(e){
        if (e.keyCode === 13) {
            if (newGuessText.length === 5){
                setGuesses([...guesses, newGuessText])
                changeKeyboardColor(newGuessText)
                setNewGuessText('')
                if (newGuessText === gameAnswer.answer) {
                    handleWin()
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


    return <div>
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Manga Wordle</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give Up</button>
        <p>Guess the word</p>
        {user ? <p>You have won {countFromAPI} times</p> : false}
        <p>{isWon && `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1).toLowerCase()}!`}</p>
        {isFinished && <DisplayManga mangaId={gameAnswer.mangaId}/>}
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        {!isFinished && <WordleDuringInput text={newGuessText}/>}

        <input autoFocus ref={inputRef} value={newGuessText}  hidden={isFinished} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <span hidden={!(newGuessText.length === 5)} onClick={handleSymbolClick} className="enter-symbol">⏎</span>
        <WordleKeyboard keyboardColor={keyboardColor} onClick={onKeyboardClick}/>


    </div>
}