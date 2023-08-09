import "./WordleKeyboard.css"

export default function WordleKeyboard({keyboardColor, onClick}){




    return <div className="wordle-keyboard">
        <div className="first-row">
            <div onClick={onClick} className={keyboardColor['q']}>Q</div>
            <div onClick={onClick} className={keyboardColor['w']}>W</div>
            <div onClick={onClick} className={keyboardColor['e']}>E</div>
            <div onClick={onClick} className={keyboardColor['r']}>R</div>
            <div onClick={onClick} className={keyboardColor['t']}>T</div>
            <div onClick={onClick} className={keyboardColor['y']}>Y</div>
            <div onClick={onClick} className={keyboardColor['u']}>U</div>
            <div onClick={onClick} className={keyboardColor['i']}>I</div>
            <div onClick={onClick} className={keyboardColor['o']}>O</div>
            <div onClick={onClick} className={keyboardColor['p']}>P</div>
        </div>
        <div className="second-row">
        <div onClick={onClick} className={keyboardColor['a']}>A</div>
        <div onClick={onClick} className={keyboardColor['s']}>S</div>
        <div onClick={onClick} className={keyboardColor['d']}>D</div>
        <div onClick={onClick} className={keyboardColor['f']}>F</div>
        <div onClick={onClick} className={keyboardColor['g']}>G</div>
        <div onClick={onClick} className={keyboardColor['h']}>H</div>
        <div onClick={onClick} className={keyboardColor['j']}>J</div>
        <div onClick={onClick} className={keyboardColor['k']}>K</div>
        <div onClick={onClick} className={keyboardColor['l']}>L</div>
        </div>
        <div className="third-row">
        <div onClick={onClick} className={keyboardColor['z']}>Z</div>
        <div onClick={onClick} className={keyboardColor['x']}>X</div>
        <div onClick={onClick} className={keyboardColor['c']}>C</div>
        <div onClick={onClick} className={keyboardColor['v']}>V</div>
        <div onClick={onClick} className={keyboardColor['b']}>B</div>
        <div onClick={onClick} className={keyboardColor['n']}>N</div>
        <div onClick={onClick} className={keyboardColor['m']}>M</div>
        </div>
    </div>
}