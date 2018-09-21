var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on('line', function (line) {

  console.log(line);

    // Come up with the phone regex
    // phone number could be (123)-123-1234, 123-123-1234, 123 123 1234, 123-123, 1234, etc etc
  const regexNum = /\(?(\d{3})\)?[\s,*-.]?\(?(\d{3})\)?[\s,*-.]?(\d{4})/g;

    // Find matches
    const number = line.match(regexNum);

    // If match found, print number with no spaces, parens, or dashes
    if(number === null) {
      console.log("Nothing!");

    } else {
      console.log(`Found the number! ${number}`);
    }
});
