import "./WordleKeyboard.css"

export default function WordleKeyboard({keyboardColor}){




    return <div className="wordle-keyboard">
        <div className="first-row">
            <div className={keyboardColor['q']}>Q</div>
            <div className={keyboardColor['w']}>W</div>
            <div className={keyboardColor['e']}>E</div>
            <div className={keyboardColor['r']}>R</div>
            <div className={keyboardColor['t']}>T</div>
            <div className={keyboardColor['y']}>Y</div>
            <div className={keyboardColor['u']}>U</div>
            <div className={keyboardColor['i']}>I</div>
            <div className={keyboardColor['o']}>O</div>
            <div className={keyboardColor['p']}>P</div>
        </div>
        <div className="second-row">
        <div className={keyboardColor['a']}>A</div>
        <div className={keyboardColor['s']}>S</div>
        <div className={keyboardColor['d']}>D</div>
        <div className={keyboardColor['f']}>F</div>
        <div className={keyboardColor['g']}>G</div>
        <div className={keyboardColor['h']}>H</div>
        <div className={keyboardColor['j']}>J</div>
        <div className={keyboardColor['k']}>K</div>
        <div className={keyboardColor['l']}>L</div>
        </div>
        <div className="third-row">
        <div className={keyboardColor['z']}>Z</div>
        <div className={keyboardColor['x']}>X</div>
        <div className={keyboardColor['c']}>C</div>
        <div className={keyboardColor['v']}>V</div>
        <div className={keyboardColor['b']}>B</div>
        <div className={keyboardColor['n']}>N</div>
        <div className={keyboardColor['m']}>M</div>
        </div>
    </div>
}