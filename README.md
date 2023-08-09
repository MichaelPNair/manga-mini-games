# Manga Mini Games

This is a single page application done in HTML, CSS and Javascript with React and express. This utilizes the MangaDex API to let users play various games that fetch data from MangaDex such as manga titles, authors, artists and cover art.

## Technologies used

* HTML, CSS, JavaScript, Express, React, axios
* Database: MongoDb, Mongoose
* MangaDex API
* Git

## Features

* Login: You can create a user and login to keep the database keep track of how many unique games you have won in each minigame.
* Manga Wordle: Play a Wordle like game where you guess the mystery 5 letter word. If you correctly guess the word or give up, you will be shown details of a manga that has that word.
* Guess the Manga: You will have to guess a mystery manga by typing in its title. If you get it wrong, you will see what details of the manga you typed match the mystery manga.
* Manga Doku: You will be presented with a 3x3 grid and will have to enter manga that you believe match the criteria given for each square. (Currently not enabled)

## About me

- Michael Nair [GitHub Profile](https://github.com/MichaelPNair)


## Screenshots
### Initial Screen

### Login Screen

### Manga Wordle

### Guess the Manga



## Future Improvements

* Improve style of webpage
* Add animations to make games feel better
* Move Wordle answers and color validation to a server to prevent it being visible in browser dev tools
* Add ability to make players wait a day for the next game
