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
        manga: 'Witch Hat Atelier',
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
        manga: 'Black Butler',
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
        manga: 'Jojos Bizzare Adventure: Stone Ocean',
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
        manga: 'Dr Slump',
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
        manga: 'Happy!',
        mangaId: 'd670572b-d21a-474c-a03d-7ec50bd53030'
    },
    {
        answer: 'seven',
        id: 40,
        manga: 'Seven Deadly Sins',
        mangaId: 'e52d9403-3356-403b-b7bb-d7d6a420dd50'
    },
    {
        answer: 'pedal',
        id: 41,
        manga: 'Yowamushi Pedal',
        mangaId: '003e7fbf-f047-4783-a7df-1533a2a653d4'
    },
    {
        answer: 'heart',
        id: 42,
        manga: 'Angel Heart',
        mangaId: '31be4cc4-d7c8-47d7-9d80-4f1b2db7979e'
    },
    {
        answer: 'fable',
        id: 43,
        manga: 'The Fable',
        mangaId: '5209fe10-4a14-403f-8837-2ccf8cced253'
    },
    {
        answer: 'force',
        id: 44,
        manga: 'Fire Force',
        mangaId: 'ec514ef4-fb77-43b9-b9b4-528229de1308'
    },
    {
        answer: 'giant',
        id: 45,
        manga: 'Giant Killing',
        mangaId: '3b6c3a0b-8752-41fc-9d3e-1310f6f28252'
    },
    {
        answer: 'drops',
        id: 46,
        manga: 'Drops of God',
        mangaId: 'd9414237-832b-46a7-9fb4-1c66f4b97736'
    },
    {
        answer: 'punch',
        id: 47,
        manga: 'Fire Punch',
        mangaId: '6fef1f74-a0ad-4f0d-99db-d32a7cd24098'
    },
    {
        answer: 'otaku',
        id: 48,
        manga: 'Wotakoi',
        mangaId: '65263bf9-4f87-4513-b72f-ad6436b3911c'
    },
    {
        answer: 'abyss',
        id: 49,
        manga: 'Made in Abyss',
        mangaId: '80422e14-b9ad-4fda-970f-de370d5fa4e5'
    },
    {
        answer: 'given',
        id: 50,
        manga: 'Given',
        mangaId: '039d717e-9690-47fd-944d-93161b97fbac'
    },
    {
        answer: 'cross',
        id: 51,
        manga: 'Cross Game',
        mangaId: '8bd288e6-7c5a-403a-b5b6-a845a70ca376'
    },
    {
        answer: 'giant',
        id: 52,
        manga: 'Blue Giant',
        mangaId: '1090afe3-3b91-4325-a9b4-d92875aa815e'
    },
    {
        answer: 'house',
        id: 53,
        manga: 'Radiation House',
        mangaId: '96338481-0531-4a25-b209-152e4178684b'
    },
    {
        answer: 'dance',
        id: 54,
        manga: 'SKET dance',
        mangaId: '566eb93d-5958-44ca-b9d3-a8335bfead5a'
    },
    {
        answer: 'bride',
        id: 55,
        manga: 'The ancient magus bride',
        mangaId: '195023bf-cf9a-4772-94ef-09dd6eddea84'
    },
    {
        answer: 'angel',
        id: 56,
        manga: 'Angel Densetsu',
        mangaId: 'e1b7fb5c-dc71-4727-8086-5d89e144091f'
    },
    {
        answer: 'black',
        id: 57,
        manga: 'Black Lagoon',
        mangaId: '6da0b34b-db19-491a-b85c-6e31e0986f15'
    },
    {
        answer: 'seeds',
        id: 58,
        manga: '7 Seeds',
        mangaId: 'ce47b821-988c-4abf-a8dd-864cef84585a'
    },
    {
        answer: 'spice',
        id: 59,
        manga: 'Spice and Wolf',
        mangaId: 'de900fd3-c94c-4148-bbcb-ca56eaeb57a4'
    },
    {
        answer: 'clear',
        id: 60,
        manga: 'Cardcaptor Sakura Clear Card',
        mangaId: '78218ec5-b7ea-4c03-accd-df98c3d8e350'
    },
    {
        answer: 'score',
        id: 61,
        manga: 'High Score Girl',
        mangaId: 'a59ec084-aed4-4a49-abc1-ae08cf7a9aa7'
    },
    {
        answer: 'steps',
        id: 62,
        manga: 'Baby Steps',
        mangaId: 'c433f163-d610-49ba-a031-a1f3b6377af2'
    },
    {
        answer: 'eater',
        id: 63,
        manga: 'Soul Eater',
        mangaId: '53ef1720-7a5d-40ad-90b0-2f9ca0a1ab01'
    },
    {
        answer: 'blast',
        id: 64,
        manga: 'Sayuki reload blast',
        mangaId: '09aa712c-1457-4779-b2a0-877099a4c0e2'
    },
    {
        answer: 'rough',
        id: 65,
        manga: 'Rough',
        mangaId: '7cdc3e9a-e948-4bd6-9b57-e7fc4e92df63'
    },
    {
        answer: 'hotel',
        id: 66,
        manga: 'Voynich hotel',
        mangaId: 'f75812e9-27bb-44d5-9cb1-25de07ceb326'
    },
    {
        answer: 'metal',
        id: 67,
        manga: 'Detroit Metal City',
        mangaId: '087e1ee7-491e-4e67-b3c2-44d227cb0584'
    },
    {
        answer: 'dress',
        id: 68,
        manga: 'My Dress Up Darling',
        mangaId: 'aa6c76f7-5f5f-46b6-a800-911145f81b9b'
    },
    {
        answer: 'harem',
        id: 69,
        manga: 'Giji Harem',
        mangaId: 'd8f9afe2-aa44-4bc6-9145-eebb1f282372'
    },
    {
        answer: 'sword',
        id: 70,
        manga: 'Sword Art Online',
        mangaId: '3dd0b814-23f4-4342-b75b-f206598534f6'
    },
    {
        answer: 'black',
        id: 71,
        manga: 'Black Cat',
        mangaId: 'b8627f53-f262-49dc-ad4a-89e8f15baa47'
    },
    {
        answer: 'tokyo',
        id: 72,
        manga: 'Tokyo Revengers',
        mangaId: '59b36734-f2d6-46d7-97c0-06cfd2380852'
    },
    {
        answer: 'books',
        id: 73,
        manga: 'Ascendence of a Bookworm',
        mangaId: 'c0ad8919-4646-4a61-adf9-0fd6d8612efa'
    },
    {
        answer: 'train',
        id: 74,
        manga: 'Densha Otoko',
        mangaId: '7b514e78-ce00-44c2-aa6f-718e17f782f2'
    },
    {
        answer: 'witch',
        id: 75,
        manga: 'Flying Witch',
        mangaId: 'f7f430ab-2c24-49d3-b698-c9ff4787805b'
    },
    {
        answer: 'uncle',
        id: 76,
        manga: 'Isekai Ojisan',
        mangaId: 'd8f1d7da-8bb1-407b-8be3-10ac2894d3c6'
    },
    {
        answer: 'lucky',
        id: 77,
        manga: 'Lucky Star',
        mangaId: '31fbb1af-3df1-496e-992f-b7f96a34d1ab'
    },
    {
        answer: 'saint',
        id: 78,
        manga: 'Saint Young Men',
        mangaId: 'e1d6dd1c-5ceb-44f7-bfe6-f74199288b07'
    },
    {
        answer: 'candy',
        id: 79,
        manga: 'Candy Candy',
        mangaId: '0b2beaa6-08df-44e5-a404-ecee109744fc'
    },
    {
        answer: 'seven',
        id: 80,
        manga: 'Eureka Seven',
        mangaId: '5353b1d5-ceec-40d7-b025-2690a6108b72'
    },
    {
        answer: 'break',
        id: 81,
        manga: 'Break Blade',
        mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
    },
    {
        answer: 'peace',
        id: 82,
        manga: 'Peace Maker',
        mangaId: '2679b5bc-63de-4009-a273-08ccdea73d38'
    },
    {
        answer: 'seven',
        id: 83,
        manga: 'Trinity Seven',
        mangaId: '12ac16ec-8894-420b-bc03-eade9340dfd8'
    },
    {
        answer: 'blade',
        id: 84,
        manga: 'Break Blade',
        mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
    },
    {
        answer: 'magic',
        id: 85,
        manga: 'Magic Knight Rayearth',
        mangaId: '20331b71-1d3f-4aed-b990-e54298424488'
    },
    {
        answer: 'devil',
        id: 86,
        manga: 'Defense Devil',
        mangaId: '3e11670e-1e34-4d67-8dea-a40ee6b73c6c'
    },
    {
        answer: 'beast',
        id: 87,
        manga: 'Beast Complex',
        mangaId: 'cd9b65e3-b9e2-4d8b-b9dd-0bc8be59f312'
    },
    {
        answer: 'japan',
        id: 88,
        manga: 'Yakitate Japan',
        mangaId: '0c29ce86-04c7-45cb-b623-70510b2064e3'
    }
    
]


export default function MangaWordle({onClickHome, user}) {

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


    return <div className="manga-wordle">
        <div ref={topRef}></div>
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Mangle</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Random Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give Up</button>
        <p>Guess the word</p>
        {gameIdSelect(selectedId)}
        {user && <p>You have won {countFromAPI} times</p>}
        <p>{isWon && `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1).toLowerCase()}!`}</p>
        {isFinished && <DisplayManga mangaId={gameAnswer.mangaId} gameAnswerName={gameAnswer.manga}/>}
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        {!isFinished && <WordleDuringInput text={newGuessText}/>}

        <input autoFocus ref={inputRef} value={newGuessText}  hidden={isFinished} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <span hidden={!(newGuessText.length === 5)} onClick={handleSymbolClick} className="enter-symbol">⏎</span>
        <WordleKeyboard keyboardColor={keyboardColor} onClick={onKeyboardClick}/>
        <div ref={bottomRef}></div>


    </div>
}