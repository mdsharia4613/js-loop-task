
//  Check Palindrome

const text = 'madamr';
let reverces = '';
for( i = text.length-1; i >= 0; i--){
    reverces += text[i];
    
}
if(text === reverces){
    console.log('palindrome')
}
else{
    console.log('not palindrom')
}
