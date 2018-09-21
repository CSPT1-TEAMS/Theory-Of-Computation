let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let regex = /^(\(\d{3}\)\s?|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/

console.log(`\n    Enter a phone number:`)
rl.on('line', function (line) {
  if(!regex.test(line))
    return console.log('Invalid phone number. Try again.')

  let matches = regex.exec(line).slice(1,4)

  console.log(`
Area code :: ${matches[0]}
   Prefix :: ${matches[1]}
   Suffix :: ${matches[2]}

Enter another phone number:`)
})

