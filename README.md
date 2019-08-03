# LIRI
Homework Assignment using node and Axios to create a SIRI spoof

### SUBMISSION:

# Screenshots
https://imgur.com/a/ofl5eCC

### DESCRIPTION

This is a homework assignment creating a spoof of SIRI, except using Language instead of Speech (aka, LIRI). 

This app uses specific user commands in order to search APIs from BandsInTown, Spotify, and OMDB. It displays errors if the user's input is incorrect, and guides them to inputting the correct command.

The fourth function, do-what-it-says, allows the file "random.txt" to be modified with one of the program commands and parameters. For example, if the random.txt file contains "movie-this,'The Matrix'" it will run the movie-this function, and search it for The Matrix.

Each of the four app functions (BandsInTown, Spotify, OMDB, and do-what-it-says) are created and defined in functions at the top of the program. These functions are then called at the bottom of the program, in the Switch Case command tree.



This program uses the following technologies:
* dotenv
* Axios
* Moment.js
* fs
* spotify API
* OMDB API
* BandsInTown API

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development