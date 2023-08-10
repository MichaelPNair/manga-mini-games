import './SingleTag.css'

export default function SingleTag({isMatch, tagName}){

    return <div className='single-tag'>
        <span className={isMatch ? 'match-tag' : 'cis-tag'}>{tagName}</span>
    </div>
}