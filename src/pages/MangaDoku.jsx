import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";


export default function MangaDoku({onClickHome, user}) {

    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Manga-Doku</h2>
        <p>Find manga that match the catgories</p>
        {user ? <p>Games won: 0</p> : false}
        <p>Place grid here</p>
        <input type="text" />


    </div>
}