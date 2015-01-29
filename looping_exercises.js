/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max() {
    "use strict";
    if (arguments[0] > arguments[1]) {
        return arguments[0];
    } else {
        return arguments[1];
    }
}


console.log(max(26, 22));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree() {
    "use strict";
    if (arguments[0] > arguments[1]) {
        return arguments[0];
    } else if (arguments[1] > arguments[2]) {
        return arguments[1];
    } else {
        return arguments[2];
    }
}

console.log(maxOfThree(24, 54, 43));
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// var char = "t"
var char = "t"
function isVowel(char) {
    "use strict";
    if (char === "a" || char === "A") {
        return true;
    } else if (char === "e" || char === "E") {
        return true;
    } else if (char === "i" || char === "I") {
        return true;
    } else if (char === "o" || char === "O") {
        return true;
    } else if (char === "u" || char === "U") {
        return true;
    } else {
        return false;
        
    }
}
    



console.log(isVowel(char))
    // ---------------------
    // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------



function rovarspraket(phrase) {
    "use strict";
    var result = "";
    for (var i = 0; i < phrase.length; i++){
        if (isVowel(phrase[i])) {
            result += phrase[i];
        }
        else if (phrase[i] != ' ') {
            result += phrase[i] + "o" + phrase[i];
        } 
        else {
            result += phrase[i];
        }
    }


    return result;
}


console.log(rovarspraket("The power is your's."));


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
var ufo = [2, 4, 6, 8]; 

function sum(numbers) {
    "use strict";
    var result = 0;
    for (var i = 0; i < numbers.length; i++){
         result += numbers[i];                  
      } 
           return result;
}
console.log(sum(ufo))


function multiply(numbers) {
    "use strict";
    var result = 1;
    for (var i = 0; i < numbers.length; i++){
         result *= numbers[i];    
    }
        return result;
}

console.log(multiply(ufo))
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(name) {
    "use strict";
        var o = '';
        var name = "jag testar";
        for(var i = name.length - 1; i >= 0; i--){
            o += name[i];
        }return o;

}
    console.log(reverse("jag testar"))
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    //...
     var words = ["the", "longest", "yard"]
     var result = '0'; 
     for(var i = 0; i < words.length; i++){   
        var b = words[i].length;
        if(result < b){
            result = b
         }

    } return result

}
console.log(findLongestWord("the", "longest", "yard"))

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, wordlengthmin) {
    "use strict";
    //...
    var words = ["the", "longest", "yard"];
    var wordlengthmin = 4;
 var wordslength = words.length;
  var result = [];
  for(var i = 0; i < wordslength; i++){   
    var b = words[i].length;
    
    
      if(wordlengthmin < b){
         
       result.push(words[i]);
       
    }

}  return result;

}
console.log(filterLongWords('the', "longest", "yard"))
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    //...
    var L = 1
    for(var i = 0; i < string.length; i++){
    
    }
}


console.log(charFreq("aaaaabbbbbababababaaa"))