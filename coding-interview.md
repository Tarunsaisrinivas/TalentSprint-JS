# Javascript Coding Questions practise :

1. Find the Longest word from the Sentence 
```js
function longWord(sentence){
    const words = sentence.split(' ');
    console.log(words); // Preview : [ 'This', 'is', 'a', 'javascript' ]
    let longestWord =""

    for (let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log("This is a Javascript Code") //Output : Javascript 
```