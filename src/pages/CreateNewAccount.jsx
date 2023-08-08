import MainTitle from "../components/MainTitle";
import BackButton from "../components/BackButton";

export default function CreateNewAccount({onClickHome}) {

    return <div>
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Create New Account</h2>
        <p>Errors go here</p>
        <form action="">
            <label>Email</label>
            <input type="text" />
            <label >Password</label>
            <input type="password" />
            <button>Create</button>
        </form>

    </div>
}