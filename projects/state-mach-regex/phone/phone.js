var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// phone number could be (123)-123-1234, 123-123-1234, 123 123 1234, 123-123, 1234, etc etc

const regexNum = ^\(?d{3}\)?[\s,*-.]?d{3}[\s,*-.]?d{4}? // this does not account for a +1 in front of the phone number
const regexNum2 = ^\+?\d{0-3}\s?\(?d{3}\)?[\s,*-.]?d{3}[\s,*-.]?d{4}?

// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
