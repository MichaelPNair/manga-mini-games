export default function LoggedInAs({onClickLogin, onClickCreateUser, onLogout, user}) {

    return <div>
        {!user && <>
            <button onClick={onClickLogin}>Login</button>
            <button onClick={onClickCreateUser}>Create New Account</button>
        </>
        }
        {user && <>
            <span>Logged in as: {user.username}</span>
            <button onClick={onLogout}>Logout</button>
        </>
        }
    </div>
}