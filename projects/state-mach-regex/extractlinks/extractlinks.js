const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const data = fs.readFileSync(filename, {encoding: 'utf8' });

// !!!! IMPLEMENT ME
const regexURL = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;

// Read file
const website = data.match(regexURL);
// Set up regex

// Find matches
for ( sites in website) {
    console.log(sites);
}
// Print all matches
