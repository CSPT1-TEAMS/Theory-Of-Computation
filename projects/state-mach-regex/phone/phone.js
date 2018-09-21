let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let regex = /^(\(\d{3}\)|\d{3})[\s-]*(\d{3})[\s-]*(\d{4})$/

console.log('Enter a phone number:')
rl.on('line', function (line) {
  if(regex.test(line)) {
    let matches = regex.exec(line).slice(1,4)
    console.log('match:', matches)
    console.log('Area code:', matches[0])
    console.log('Prefix:', matches[1])
    console.log('Suffix:', matches[2])
  }
  else {
    console.log('Invalid phone number. Try again.')
  }
})

