const fs = require('fs')

const readfile = path =>
      fs.readFile(path, 'utf-8', (err, data) => data)

const args = process.argv.slice(2)

if (args.length != 1) {
    console.error("usage: extractlinks inputfile")
    process.exit(1)
}

const filename = args[0]

const regex = /http[s]?:\/\/[\w.]+(.com|.net)/g

fs.readFile(filename, 'utf-8', (err, data) => {

})

console.log('https://google.com',       '\n', regex.test('https://google.com'))
console.log('http://google.com',        '\n', regex.test('http://google.com'))
console.log('https://www.google.com',   '\n', regex.test('https://www.google.com'))
console.log('http://www.google.com',    '\n', regex.test('http://www.google.com'))
console.log('https://www.google.net',   '\n', regex.test('https://www.google.net'))
console.log('https://www.google',       '\n', regex.test('https://www.google'))
console.log('https://www.google',       '\n', regex.test('https://www.google'))

console.log('https://this.that.google.com',       '\n', regex.test('https://this.that.google.com'))

// Set up regex

// Find matches

// Print all matches
