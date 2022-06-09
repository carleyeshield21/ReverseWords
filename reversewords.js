// This is the link to JavaScript Challenge
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  str = str.concat(' ')
  // It is always effective to output the desired string by using the specific indices in the slice function so we can see the relationship of these indices in the for loop with a nested if condition. We use three function to reverse the sliced string, the split, reverse, and join. We concatenate a space at the end of the string str so we can use this as a marker for the for loop indices for the slice function  
  // console.log(str.slice(0, 4))
  // console.log(str.slice(5, 7))
  // console.log(str.slice(8, 10))
  // console.log(str.slice(11, 19))  

  arr = []
  j=0
  for(i=0; i<=str.length-1; i++){
    if(str[i] == ' '){
        // console.log(j, i)
        // console.log(str.slice(j,i).split('').reverse().join(''))
        arr.push(str.slice(j,i).split('').reverse().join(''))
        j = i + 1
    }
  }
// We convert the array arr to a string and use the replace function to omit the commas and replace it with a space  
arrstring = arr.toString()
const newstring = arrstring.replace(/,/g, ' ');
console.log(newstring);

}
reverseWords('This is an example!')
console.log('=====')
reverseWords('double  spaces')