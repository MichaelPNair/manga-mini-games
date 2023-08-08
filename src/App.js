
import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import GuessTheManga from './pages/GuessTheManga';
import MangaDoku from './pages/MangaDoku';
import MangaWordle from './pages/MangaWordle';
import Login from './pages/Login';
import CreateNewAccount from './pages/CreateNewAccount';
import LoggedInAs from './components/LoggedInAs';
import DisplayManga from './components/DisplayManga';

function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  const [user, setUser] = useState(null)

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
        return <HomePage onClickGuess={toGuessPage} onClickDoku={toDokuPage} onClickWordle={toWordlePage}/>;
      case 'Guess':
        return <GuessTheManga onClickHome={toHomePage} user={user}/>;
      case 'Doku':
        return <MangaDoku onClickHome={toHomePage} user={user}/>;
      case 'Wordle':
        return <MangaWordle onClickHome={toHomePage} />;
      case 'Login':
        return <Login onClickHome={toHomePage} />;
      case 'CreateUser':
        return <CreateNewAccount onClickHome={toHomePage} />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="App">
      <LoggedInAs onClickLogin={toLoginPage} onClickCreateUser={toCreateUserPage}/>
      {renderSwitch(currentPage)}


    </div>
  );
}

export default App;
