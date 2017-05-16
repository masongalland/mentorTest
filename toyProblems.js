//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(str) {
    let answer = "";

    for (let i = str.length - 1; i>= 0; i--) {
      answer += str[i]
    }
    return answer;
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
      if(answer.indexOf(arr[i]) == -1) {
        answer.push(arr[i]);
      }
    }
    return answer;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str) {
    var arr = str.split(' ');
  
    for(var i = 0; i < arr.length; i++){
      var upper = arr[i][0].toUpperCase();
      arr[i] = upper + arr[i].slice(1);
    }
    return arr.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str) {
    let allVowels = str.match(/[aeiou]/gi)

    if (allVowels !== null) {
      return allVowels.length;
    }
    else {
      return 0;
    }
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
