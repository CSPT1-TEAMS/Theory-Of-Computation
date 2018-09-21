var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {


  let phone = /^\(?(\d{3})\)?[-|.| ]?(\d{3})[-|.|\s]?(\d{4})$/
  
  digits = line.match(phone)
  if (digits === null){
    console.log('Re-Enter phone #')
  }
  else{
    console.log('phone digits' + ' ' + digits[1] + digits[2] + digits[3])
  }
    // !!!! IMPLEMENT ME

    // Come up with the phone regex

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
