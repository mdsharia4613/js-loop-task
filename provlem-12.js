
// Find Longest Word

const sentences = "I love Programming";
let Word ="";
const count = sentences.split(" ");
for(i = 0; i < count.length; i++){
    if (count[i].length > Word.length) {
        Word = count[i];
    }
}

console.log('largest word:', Word)

