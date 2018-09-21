const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
let file = fs.readFileSync(filename,{
    encoding:'utf8'
});


let re = /(bounty)/g;
let anchors = /<a [^>]+>([^<]+)<\/a>/g;
let regmatch;
while ((regmatch = anchors.exec(file)) !== null) {
    var msg = 'Found ' + regmatch[0] + '. ';
    console.log(msg);
  }





// Find matches

// Print all matches
