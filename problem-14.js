
// String Without Vowels

const text = "ashik"
// console.log(text.replaceAll(/[aeiou]/gi, ''));

let count = '';
for(let i = 0; i< text.length; i++){
    if (text[i] !== 'a' && text[i] !== 'e' && text[i] !== 'i' && text[i] !== 'o' && text[i] !== 'u'){
        count += text[i];
    }
}
console.log(count);