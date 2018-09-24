var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin


rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;
    const matches = line.match(regex);

    // Find matches
    if (matches == null) {
      console.log("No number found");
    } else{
      console.log(`Area Code: ${matches[1]} \n Prefix: ${matches[2]} \n Sufix: ${matches[3]}`)
      }
    

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
