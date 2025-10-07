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
for(let i = 0; i < value.length; i++){
    const char = value[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        counts++;
    }
}
console.log('vawel' ,counts);

// Find the largest number in an array

const number = [12, 10, 9, 3, 22, 2];
let values = number[0];
for( i = 0; i < number.length; i ++){
    if( number[i] > values){
        values = number[i];
    }
}
console.log('max', values);

// Sum of digits of a number

const num = 1234;
let sum = 0;
const str = num.toString();
for(let i = 0; i < str.length; i++){
    sum = sum + parseInt(str[i]);
}

console.log('sum', sum);