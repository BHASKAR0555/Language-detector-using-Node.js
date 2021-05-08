const franc = require("franc");
const langs = require("langs");
const color = require("colors");
const input = process.argv[2];

const langcode = franc(input);

if (langcode === 'und') {
    console.log("sorry coudn't figure it out,please try with some more lines of language");
}
else {
    const language = langs.where("3", langcode);
    console.log(`our best guess is":${language.name}`.rainbow);
}

