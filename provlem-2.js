//  Reverse a String

const text = 'world';
let count = '';
for(let i = text.length -1; i >= 0; i-- ){
    count += text[i];
}
console.log('Reversed string:' ,count)


