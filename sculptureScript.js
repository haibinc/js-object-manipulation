const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }
let sculptureListLengths = [];

for (const sculpture in sculptureList){
    sculptureListLengths[sculpture] = {};

    for(const data in sculptureList[sculpture]){
        sculptureListLengths[sculpture][data] = sculptureList[sculpture][data].length;
    }
}
console.log(sculptureListLengths);
