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

  if (password === ADMIN_PASSWORD){
  	return "Welcome!";
  }
  	return "Access denied, wrong password!";
  // Change code above this line
}

// early return optimizaion method(task 3)

function checkStorage(available, ordered) {
  // Change code below this line
  
  if (ordered === 0) {
    return "Your order is empty!";}
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";} 
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
