// .test() method
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);



// alternation or OR operator
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);



// flag ignorecase
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString);



// .match() method
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);



// flag g
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // ["Repeat"]
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // ["Repeat", "Repeat", "Repeat"]



// Wildcard period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);



// Set ([])
// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
result // return all the vowels in quoteSample



// Built-in: hyphen (-)
// Match letters of the alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex);



// Match letter and number of the alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex);



// Negated character sets : ([^])
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex);



// Match character one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex); // ["ss", "ss"]



// Match character zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); // ["g"]
oPhrase.match(goRegex); // null



// Greedy and lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/g;
let result = text.match(myRegex); // [ '<h1>Winter is coming</h1>' ]
let myRegex = /<.*?>/g;
let result = text.match(myRegex); // [ '<h1>', '</h1>' ]



// The caret (^)
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);



// The dollar sign
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);



// Shorcut: \w ([a-zA-Z0-9_])
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+?/g; 
let result = quoteSample.match(alphabetRegexV2);
console.log(result)



// Negated shortcut
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W+?/g; 
let result = quoteSample.match(nonAlphabetRegex).length;



// Shortcut: \d ([0-9])
let movieName = "2001: A Space Odyssey";
let numRegex = /\d+?/g; 
let result = movieName.match(numRegex).length;




// \D ([^0-9])
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D+?/g; 
let result = movieName.match(noNumRegex).length;



// Check username
let username = "JackOfAllTrades";
let userCheck = /^\D[a-z]+\d*$|^\D\d{2,}$/i; 
let result = userCheck.test(username);



// Whitespace (\s) [\r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);



// Quantify specifiers
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);




// Specify the lower limit
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);



// n exact matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);



// Quantifier : ? 
// check for 0 or 1
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true



// Check for groups
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin\sD\.|Eleanor) Roosevelt/;
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);



// Capture groups for repeated substrings
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; 
let result = reRegex.test(repeatNum);



// Replace with capture groups and dollar sign
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText); //three two one



// trim with regex
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex,""); 



// positive lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);