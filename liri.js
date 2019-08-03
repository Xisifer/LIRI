console.log("HELLO, WORLD");
require("dotenv").config();
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var spotify = require('node-spotify-api');

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var moment = require("moment");


function concertThis() {
    console.log("Concert function");

    /*
    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal: */
    var artist = process.argv.slice(3).join(" ");
    var bandsintownQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=420982e1d99e34cf03729da2afe82f67";
    axios.get(bandsintownQueryUrl).then(
        function(response) {
            console.log(response.data[0]);
            //  * Name of the venue
            console.log("Venue name: " + response.data[0].venue.name);
            //  * Venue location
            console.log("City: " + response.data[0].venue.name + 
            "\nState: " + response.data[0].venue.region + 
            "\nCountry: " + response.data[0].venue.country);
            //  * Date of the Event (use moment to format this as "MM/DD/YYYY")
            var eventdate = moment(response.data[0].datetime).format('L');
            console.log("Date: " + eventdate);
        }
    );
    

     
};

function spotifyThisSong() {
    console.log("Spotify function");
    var spotifyQuery = process.argv.slice(3).join(" ");

    /* * This will show the following information about the song in your terminal/bash window */
    axios.get(spotifyQuery).then(
//      * Artist(s)
        function(response) {
            console.log(response.data[0]);
        }
//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from
    )


//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (!spotifyQuery) { spotifyQuery = "the sign ace of base"};
        
}
//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

//    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

//    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
};

function movieThis() {
    console.log("Movie function");

    /* * This will output the following information to your terminal/bash window: */

    //    * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    //  * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    //  * It's on Netflix!​
//    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
};


function doWhatItSays() {
    console.log("Do This Thing function");


    //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    //  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    //  * Edit the text in random.txt to test out the feature for movie-this and concert-this.

    
};

var action = process.argv[2];


switch(action) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Error, action not recognized! \nPlease enter one of the following: ");
        console.log("concert-this <insert artist/band name here>");
        console.log("spotify-this-song <insert song name here>");
        console.log("movie-this <insert movie name here>");
        console.log("do-what-it-says");
    
}