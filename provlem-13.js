
// Count Digits in a String

const str = "abc123xyz45";
let count = 0;
for( i = 0; i < str.length; i++){
    if(str[i] >= '0' && str[i] <= '9'){
        count++;
    }
}
console.log('total digits:', count);