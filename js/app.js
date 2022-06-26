// First
let evens = [2, 4, 6, 8, 10];
let evensSum = 2 + 4 + 6 + 8 + 10;
let evensAverage = evensSum / evens.length;
console.log(evensAverage);

// Second
let objectsWrapper = [
  {
    name: "Giorgi",
    age: 25,
  },
  {
    name: "Salome",
    age: 30,
  },
  {
    name: "Nino",
    age: 21,
  },
  {
    name: "Irakli",
    age: 34,
  },
  {
    name: "Mari",
    age: 22,
  },
];

console.log(objectsWrapper);

// Third

let sherlock = {
  firstName: "Sherlock",
  lastName: "Holmes",
  address: "Baker Street 221b",
  age: 60,
  phoneNumbers: [123456789, 987654321],
};

console.log(sherlock);

// Fourth

let myName = sherlock.firstName;
let myAge = sherlock.age;
let myAddress = sherlock.address;
let txt = `My name is ${myName}, my age is ${myAge}, my address is ${myAddress}`;
console.log(txt);
