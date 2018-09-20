const fs = require('fs')

const readfile = path =>
      fs.readFile(path, 'utf-8', (err, data) => data)

const args = process.argv.slice(2)

if (args.length != 1) {
    console.error("usage: extractlinks inputfile")
    process.exit(1)
}

const filename = args[0]

let text = fs.readFile(filename, 'utf-8', (err, data) => data)

console.log(text)

// Set up regex

// Find matches

// Print all matches
