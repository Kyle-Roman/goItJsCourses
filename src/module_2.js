// func optimizaion method(task 1)

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// early return method(task 2)

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
  // Change code above this line
}

// early return optimizaion method(task 3)

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";

  // Change code above this line
}

// indexing array method(task 5)
const fruits = ["apple", "plum", "pear", "orange"];


const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// renaming const method (task 6)
const fruits = ["apple", "plum", "pear", "orange"];


fruits[1] = "peach";
fruits[3] = "banana";

// array last elem index method (task 8)
const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


// array extreme points method (task 9)

function getExtremeElements(array) {

  const firstElement = array[0];

  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];

  return [firstElement, lastElement]
}

// srting split() method (task 10)

function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}

// jewellery method (task 11)

function calculateEngravingPrice(message, pricePerWord) {

  let wordCounter;

  wordCounter = message.split(" ");

  const totalPrice = (wordCounter.length * pricePerWord);

  return totalPrice;
}

// join() method (task 12)

function makeStringFromArray(array, delimeter) {
  let string;

  string = array.join(delimeter);

  return string;
}

// slug generator method (task 13)

function slugify(title) {
  const normalizedInput = title.toLowerCase();

  let words;

  words = normalizedInput.split(' ');

  const slug = words.join("-");

  return slug;
}

// array slice() method (task 14)

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2, 5);

// concat() method (task 15)

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

// concat() + slice() method (task 16)


function makeArray(firstArray, secondArray, maxLength) {

  const array = firstArray.concat(secondArray);
  const newArray = array.slice(0, maxLength);
  return newArray;
}

// for method (task 17)

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

// for + total method (task 18)

function calculateTotal(number) {
  let total = 0;
  for (i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;

}

// for + total method (task 19)

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

// for + total method (task 20)

function calculateTotalPrice(order) {
  let total = 0;
  
  for (let i = 0; i <= order.length - 1; i += 1){
   total += order[i];
  }
  
  return total;
}

// for + string method (task 21)

function findLongestWord(string) {

   const words = string.split(' ');
  
   let longestWord = words [0];
  
  for ( const word of words) {
  	if (word.length > longestWord.length){
    longestWord = word;
    }
  }
  return longestWord;
}

// .push() method (task 22)

function createArrayOfNumbers(min, max) {
  const numbers = [];
  
  for (let i = min; i <= max; i += 1){
  	numbers.push(i); 
  }
  
  return numbers;
}

// filter array method (task 23)

function filterArray(numbers, value) {
  const filteredArray = [];
  
  for (const number of numbers){
  	if (number > value){
    filteredArray.push(number);
 
    }  
  }
 return filteredArray;
}	

// includes() array method (task 24)

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}

// common elements in array method (task 25)

