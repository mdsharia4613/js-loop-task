

//   Count Vowels in a String

const name = 'Bangladesh';
let count = 0;
for(let i = 0; i < name.length; i++){
    const char = name[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        count++;
    }
}
console.log(count);