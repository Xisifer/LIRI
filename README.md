# LIRI

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
