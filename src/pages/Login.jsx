import MainTitle from "../components/MainTitle";
import BackButton from "../components/BackButton";


export default function Login({onClickHome}) {

    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Login</h2>
        <p>errors go here</p>
        <form action="">
            <label>Email</label>
            <input type="text" />
            <label >Password</label>
            <input type="password" />
            <button>Login</button>
        </form>

    </div>
}