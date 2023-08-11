import './LoggedInAs.css'

export default function LoggedInAs({onClickLogin, onClickCreateUser, onLogout, user}) {

    return <div className='logged-in-as'>
        {!user && <>
            <button onClick={onClickLogin} className='login-button'>Login</button>
            <button onClick={onClickCreateUser} className='new-button'>Create New Account</button>
        </>
        }
        {user && <>
            <span className='logged-in-text'>Logged in as: {user.username}</span>
            <button onClick={onLogout} className='logout-button'>Logout</button>
        </>
        }
    </div>
}