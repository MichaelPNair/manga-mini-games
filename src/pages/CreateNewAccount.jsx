import MainTitle from "../components/MainTitle";
import BackButton from "../components/BackButton";
import { useState } from "react";
import axios from "axios";
import './CreateNewAccount.css'

export default function CreateNewAccount({onClickHome, toLoginPage}) {

    const [formData , setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()

        axios.post('/api/login/new', formData)
        .then(res => {
            toLoginPage()
        })
        .catch(err => {
            console.log(err.response.data)
            setError(err.response.data.message)
        })
    }

    return <div className="create-new-account-page">
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Create New Account</h2>
        {error && <p>{error}</p>}
        <form onSubmit={onSubmit} action="">
            <div className="form-wrapper">
                <div>
                    <label>Username</label>
                    <input onChange={handleChange} value={formData.username} name="username" type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handleChange} value={formData.password} name="password" type="password" />
                </div>
            </div>
            <button>Create</button>
        </form>

    </div>
}