// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) 
{
    return Math.sign(n) * n.toString().replace('-','').split('').reverse().join('');
}

module.exports = reverseInt;


// function reverseInt(n) 
// {
//     let revInt = + n.toString().replace('-','').split('').reverse().join('');
//     return n >= 0 ? revInt : revInt * -1
// }
