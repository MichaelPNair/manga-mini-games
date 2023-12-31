import MainTitle from "../components/MainTitle";
import BackButton from "../components/BackButton";
import { useState } from "react";
import axios from "axios";
import './Login.css'


export default function Login({onClickHome, onLogin}) {


    const [formData , setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/api/login', formData)
            .then(res => {
                let token = res.data
                localStorage.setItem("token", token)
                onLogin(formData)
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data.message)
            })
    }

    return <div className="login-page">
        <MainTitle />
        <BackButton onClick={onClickHome}/>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} action="">
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
            <button>Login</button>
        </form>

    </div>
}