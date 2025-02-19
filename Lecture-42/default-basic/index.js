
const jokes = require('give-me-a-joke');

// To get a random dad joke
// jokes.getRandomDadJoke (function(joke) {
//      console.log(joke);
// });

const figlet = require("figlet");
const color = require('colors');

figlet("Prince", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
  });

