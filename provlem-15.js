
//  Combine Loop and Slice

const text = "adcfg"
for(let start = 0; start < text.length; start++){
    for(let end = start + 1; end <= text.length; end++){
        console.log(text.slice(start, end));
    }

}
