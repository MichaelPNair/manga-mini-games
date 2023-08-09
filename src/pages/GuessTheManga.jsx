import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import axios from "axios";
import CompareDetails from "../components/CompareDetails";


const mangaAnswers = [
    {
        id: 1,
        manga: `I May Be a Guild Receptionist, but I'll Solo Any Boss to Clock Out on Time`,
        mangaId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        id: 2,
        manga: 'One Piece',
        mangaId: 'a1c7c817-4e59-43b7-9365-09675a149a6f'
    },
    {
        id: 3,
        manga: 'Great Teacher Onizuka',
        mangaId: '02860cdf-1020-40f1-a23f-2025d80f6290'
    },
    {
        id: 4,
        manga: 'Grand Blue',
        mangaId: 'fffbfac3-b7ad-41ee-9581-b4d90ecec941'
    },
    {
        id: 5,
        manga: 'March comes in like a lion',
        mangaId: '0ca1627e-95dd-4118-892a-f144adf02256'
    },
    {
        id: 6,
        manga: 'witch hat atelier',
        mangaId: '67e7453b-9ee5-4ae5-9316-215b03e4a71d'
    },
    {
        id: 7,
        manga: 'A Silent Voice',
        mangaId: '4bde51e5-e420-45a4-98e9-7405bf2d59ff'
    },
    {
        id: 8,
        manga: 'Bungou Stray Dogs',
        mangaId: '3fba42cf-2ad6-4c30-a7ab-46cb8149208a'
    },
    {
        id: 9,
        manga: 'One Punch Man',
        mangaId: 'd8a959f7-648e-4c8d-8f23-f1f3f8e129f3'
    },
    {
        id: 10,
        manga: 'Shiori Experience: My Plain Self',
        mangaId: 'd58abdf4-9268-41d8-9920-f8fe8858a173'
    },
    {
        id: 11,
        manga: 'That Time I Got Reincarnated as a Slime',
        mangaId: 'e78a489b-6632-4d61-b00b-5206f5b8b22b'
    },
    {
        id: 12,
        manga: 'Rebuild World',
        mangaId: '99182618-ae92-4aec-a5df-518659b7b613'
    },
    {
        id: 13,
        manga: 'Demon Slayer',
        mangaId: '789642f8-ca89-4e4e-8f7b-eee4d17ea08b'
    },
    {
        id: 14,
        manga: 'Astro Boy',
        mangaId: 'ca4c84bb-7272-45aa-a22d-dc1282b52372'
    },
    {
        id: 15,
        manga: 'Touch',
        mangaId: '36b4c3d4-629d-45cb-b911-ae0906f6b544'
    },
    {
        id: 16,
        manga: 'Tokyo Ghoul',
        mangaId: '6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b'
    },
    {
        id: 17,
        manga: 'Dragon Quest Dai no Daiboken',
        mangaId: '3a3cfc32-357e-4b50-a660-5ce4b58dfcbc'
    },
    {
        id: 18,
        manga: 'Black butler',
        mangaId: '8bd19e5c-94f7-4368-a918-50f463857446'
    },
    {
        id: 19,
        manga: 'Death Note',
        mangaId: '75ee72ab-c6bf-4b87-badd-de839156934c'
    },
    {
        id: 20,
        manga: 'Flame of Recca',
        mangaId: 'fd3db4be-b2d0-41ab-895b-de5dc99b4f9d'
    },
    {
        id: 21,
        manga: 'Magi: The Labyrinth of Magic',
        mangaId: 'ce63e6b8-fad8-48bc-a2aa-d801fb8d5d43'
    },
    {
        id: 22,
        manga: 'Steel Ball Run',
        mangaId: 'b30dfee3-9d1d-4e8d-bfbe-8fcabc3c96f6'
    },
    {
        id: 23,
        manga: 'Attack on Titan',
        mangaId: '304ceac3-8cdb-4fe7-acf7-2b6ff7a60613'
    },
    {
        id: 24,
        manga: 'Pluto',
        mangaId: 'e171c073-4415-499b-85bc-ea93825127ac'
    },
    {
        id: 25,
        manga: 'Akira',
        mangaId: '175cf215-2122-4656-9fac-37ac092438af'
    }
    
]

export default function GuessTheManga({onClickHome, user}) {

    const [gameAnswer, setGameAnswer] = useState(mangaAnswers[Math.floor(Math.random()* mangaAnswers.length)])

    const [answerDetails, setAnswerDetails] = useState(null)

    const [guessDetails, setGuessDetails] = useState(null)

    const [newguessId, setNewGuessId] = useState('')

    const [guesses, setGuesses] = useState([])

    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/${gameAnswer.mangaId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {

                setAnswerDetails(res.data)
                console.log(res.data)
            })
 

    }, [gameAnswer])

    let title 
    let authors
    let artists
    let coverId
    let publicationDemographic
    let status
    let year
    let theme
    let genre

    if (answerDetails) {
        title = answerDetails.data.attributes.title.en
        authors = answerDetails.data.relationships
            .filter(relationship => relationship.type === 'author')
            .map(relationship => relationship.attributes.name)

        artists = answerDetails.data.relationships
        .filter(relationship => relationship.type === 'artist')
        .map(relationship => relationship.attributes.name)

        coverId = answerDetails.data.relationships
            .filter(relationship => relationship.type === 'cover_art')[0].attributes.fileName

        publicationDemographic = answerDetails.data.attributes.publicationDemographic
        status = answerDetails.data.attributes.status
        year = answerDetails.data.attributes.year
            
        theme = answerDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'theme')
        .map(tag => tag.attributes.name.en)

        genre = answerDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'genre')
        .map(tag => tag.attributes.name.en)
    }

    function handleChange(e){
        setNewGuessId(e.target.value)
    }

    function handleClick(){
        setGuesses([...guesses, newguessId])
        setNewGuessId('')
    }

    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Guess The Manga</h2>
        <p>What manga am I thinking of?</p>
        {user ? <p>Unique games won: 0</p> : false}
        <input onChange={handleChange} value={newguessId} type="text" /><span>⏎</span>
        <button onClick={handleClick}>Submit Guess</button>
        <p>details of guesses, probably a component of its own</p>
        <p>Cover Art, Title, Authors, Artists, Demographic, Status, Publication Year, Genres, Themes</p>
        {guesses.length === 1 && <CompareDetails guessId={guesses.at(-1)} title={title} authors={authors} artists={artists} publicationDemographic={publicationDemographic} status={status} year={year} theme={theme} genre={genre}/>}


    </div>
}