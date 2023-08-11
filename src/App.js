
import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import GuessTheManga from './pages/GuessTheManga';
// import MangaDoku from './pages/MangaDoku';
import MangaWordle from './pages/MangaWordle';
import Login from './pages/Login';
import CreateNewAccount from './pages/CreateNewAccount';
import LoggedInAs from './components/LoggedInAs';
import { getUser } from './utils/users_service';

function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  const [user, setUser] = useState(getUser())

  function login(user){
    setUser(user)
    setCurrentPage('Home')
  }

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
  }

  function toHomePage(){
    setCurrentPage('Home')
  }

  function toGuessPage(){
    setCurrentPage('Guess')
  }

  function toDokuPage(){
    setCurrentPage('Doku')
  }

  function toWordlePage(){
    setCurrentPage('Wordle')
  }

  function toLoginPage(){
    setCurrentPage('Login')
  }

  function toCreateUserPage(){
    setCurrentPage('CreateUser')
  }

  function renderSwitch(param) {
    switch(param) {
      case 'Home':
        return <HomePage onClickGuess={toGuessPage} onClickDoku={toDokuPage} onClickWordle={toWordlePage} user={user}/>;
      case 'Guess':
        return <GuessTheManga onClickHome={toHomePage} user={user}/>;
      // case 'Doku':
      //   return <MangaDoku onClickHome={toHomePage} user={user}/>;
      case 'Wordle':
        return <MangaWordle onClickHome={toHomePage} user={user}/>;
      case 'Login':
        return <Login onClickHome={toHomePage} onLogin={login}/>;
      case 'CreateUser':
        return <CreateNewAccount onClickHome={toHomePage} toLoginPage={toLoginPage}/>;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="App">
      {/* <LoggedInAs onClickLogin={toLoginPage} onClickCreateUser={toCreateUserPage} onLogout={logout} user={user}/> */}
      {renderSwitch(currentPage)}


    </div>
  );
}

export default App;
