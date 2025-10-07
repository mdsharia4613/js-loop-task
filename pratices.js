// Check if a string is a palindrome

const text = 'samim haque';
let count = '';
for (let i = text.length-1; i >= 0; i--){
    count += text[i];
}
console.log('Reversed string:', count)

// Count vowels in a string

const value = 'samim haque';
let counts = 0;
for( i = 0; i < value.length; i++){
    const char = value[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        counts++;
    }
}
console.log('vawel' ,counts);