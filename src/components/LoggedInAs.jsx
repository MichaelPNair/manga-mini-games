export default function LoggedInAs({onClickLogin, onClickCreateUser}) {

    return <div>
        <button onClick={onClickLogin}>Login</button>
        <button onClick={onClickCreateUser}>Create New Account</button>
        <span>Logged in as: </span>
        <button>Logout</button>
    </div>
}