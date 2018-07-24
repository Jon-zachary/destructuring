const goldfish = {
  name: "Gustave",
  breed: "Telescope",
  weaknesses: ["Weddings", "Scandal", "Sushi"],
  bestFriends: {
    brian: {
      name: "Brian",
      breed: "Oranda",
      weaknesses: ["Food"]
    },
    halley: {
      name: "Halley",
      breed: "Comet",
      weaknesses: ["Red wine", "Chuck Mangione"]
    },
    ziggy: {
      name: "Ziggy",
      breed: "Ogon Koi",
      weaknesses: ["Brian", "Plants", "Death metal"]
    }
  }
}

// Store the following values located in the above `goldfish` object into variables, with names of your choice. Each prompt must be completed on one line and using array/object destructuring...
// - "Gustave" and "Telescope"
const { name, breed } = goldfish;
console.log(name,breed);
// - "Weddings" and "Scandal" 
const [firstWeakness, secondWeakness] = goldfish.weaknesses;
console.log(firstWeakness,secondWeakness);
// - The entire `brian` and `ziggy` objects
const { brian, ziggy } = goldfish.bestFriends;
console.log(brian,ziggy);
// - "Red Wine" and "Chuck Mangione" 
const [ halleyWeakness1, halleyWeakness2 ] = goldfish.bestFriends.halley.weaknesses;
console.log(halleyWeakness1,halleyWeakness2);

//Write a function that takes our goldfish object and console logs 'My name is [goldfish.name] and I have a weakness for [goldfish.weaknesses[0]]' using destructuring.
function info( {name, weaknesses:weakness} ) {
  console.log(`my name is ${name} and I have a weaknesses for ${weakness[0]} `);
};
info(goldfish);

//Write a function that calculates the volume of a box with a height a width and a depth.
//write the function using es6 defaults with height,width and depth equal to 10.
function volume({ height=10, width=10, depth=10} = {}) {
  return (height*width*depth)
}

const vol = volume({ width:5 })

console.log(vol);

//Create an array [1,2,3,4,5]. Using array destructuring create variables first and
//fifth and set them equal to the first and fifth value of the array. Next, using the same array 
//create two variables second and fourthFifth and set second equal to the second element of the 
//array and fourthFifth equal to the fourth and fifth elements of the array using the rest operator.
// Remember to do these on one line each.
const arr = [1,2,3,4,5];
const [first,,,,fifth] = arr;
const [,second,,...fourthFifth] = arr;
console.log(first,fifth);
console.log(second,fourthFifth);
const [a,...b] = arr;
console.log(a,b);


