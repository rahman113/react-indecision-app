const { javascript } = require("webpack");

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

// es6 slice method in javascript

const fruites = ['Mango', 'Banana', 'Apple', 'Orange', 'PineApple', 'Guava', 'Lucknow']
console.log(fruites.slice(1,5))

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'Jackal'];
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));

console.log(animals.slice(2, -1));
console.log(animals.slice());

//The splice() method changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(4, 1, 'Feb');
console.log(months)

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
 //myFish.splice(0,2,'parrot','anymone','blue')


myFish.splice(2)
console.log(myFish)

// In JavaScript, a variable can be declared after it has been used.



console.log(typeof typeof typeof numeric)

// Call, apply, and bind method in java script
// With the call method you can write that can be used on different objects
const person = {

  firstName: 'Andrew',
  lastName: 'Mike',

  fullName: function(){
    return this.firstName + " " + this.lastName
  }
}

const person1 = {
  firstName: 'Dayle',
  lastName: 'Styne'
}
const getIdentity = person.fullName.call(person1)
console.log(getIdentity)

function displayName(){
  console.log('Simran')
}
displayName()
displayName.call()

let participant1 = {
  name: 'lily',
  battery: 70,
  chargeBattery: function(a, b) {
    this.battery = this.battery + a + b;
  }
}
let participant2 = {
  name: 'Rahul',
  battery: 60,
  lowBattery: function(k,m) {
    this.battery = this.battery + k + m
  }
}
let participant3 = {
  name: 'Andrew Joseph Mead',
  battery: 00
}
participant2.lowBattery.call(participant3, 0,0) // the call method takes arguments seperatley
participant1.chargeBattery.apply(participant2, [20,30]) // the apply method takes arguments as array
console.log(participant1)
console.log(participant2)
console.log(participant3)

const cadidateList = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const cadidate1 = {
  firstName:"Hege",
  lastName: "Nilsen",
}

cadidateList.fullName.bind(cadidate1);
console.log(cadidateList)
console.log(cadidate1)

let people = {
  name: 'subhakanta',

};
let person2 = people // objects interact by ref when setting them equal to each other since both object refer to the refernce in change in any object of them, will affect the other.
person2.name = 'Subh';
console.log(people)