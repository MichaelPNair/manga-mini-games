import SingleTag from "./SingleTag";


export default function ShowManyTags({guessArray, guessMatchArray}){


    return <div>
        {guessArray.map((guess, idx) => <SingleTag key={idx} isMatch={guessMatchArray[idx]} tagName={guess}/>)}
    </div>
}