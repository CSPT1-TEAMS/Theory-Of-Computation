let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let regex = /^(\d{3})(\d{3})(\d{4})$/

rl.on('line', function (line) {
  console.log(regex.test(line))
  console.log('match:', matches)

  matches = regex.exec(line).slice(1,4)
  console.log('Area code:', matches[0])
  console.log('Prefix:', matches[1])
  console.log('Suffix:', matches[2])
})
