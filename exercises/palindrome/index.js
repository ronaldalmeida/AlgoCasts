// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false  

function palindrome(str) 
{
    return str.split('').every((val,i) => val === str[str.length-1-i] )
}

module.exports = palindrome;



// function palindrome(str) 
// {
//     var reversed = str.split('').reverse().join('');
//     return reversed === str;
// }
// function palindrome(str) 
// {
//     let result = true;
//     if (str.length < 2) return result;
//     let arr = str.split('');
//     var i = 0;
//     var j = arr.length-1;
//     while(i < j)
//     {
//         if(arr[i] == arr[j]) 
//         {        
//             i++;j--;
//             continue;
//         }
//         else {result = false; break;}
//     }
//     return result;
// }