let fs = require('fs')

let readfile = path => fs.readFile(path, 'utf-8', (err, data) => data)

let args = process.argv.slice(2)

if (args.length != 1) {
  console.error("usage: extractlinks inputfile")
  process.exit(1)
}

let filename = args[0]
let regex = /https?:\/\/?[\w.-]+(com|net|org|blog)[\/[\w-]*]*[(?|&)\w+=\w+]*/g

let readFile = fs.readFileSync(filename, 'utf8', (err, data) => data)
let urls = readFile.match(regex)

// Log array of URLs:
console.log(urls)

// Write each URL as a line to urls.txt
let outputFile = 'urls.txt'
let file = fs.createWriteStream(outputFile)
file.on('error', () => {})
urls.forEach(url => file.write(url + '\n'))
file.end()

