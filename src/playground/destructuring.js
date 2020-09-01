// const person = {
//   name: "Shrey",
//   age: 23,
//   location: {
//     city: "bhiwadi",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (person.location.city && person.location.temp) {
//   console.log(`it's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the enemy",
//   authors: "Ryan Holiday",
//   publisher: {
//     name: "penguin"
//   }
// };

// const { name: publisherName = "Self-published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = [
//   "1299 S juniper street",
//   "Philidelphia",
//   "Pennisylvania",
//   "19147"
// ];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , cost] = item;

console.log(`A medium ${coffee}  costs ${cost}`);
