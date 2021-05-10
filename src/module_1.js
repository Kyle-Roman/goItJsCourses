// MODULE_1

// switch method (task 29)
function getShippingCost(country) {
  let message;
  // Change code below this line
switch (country) {
  case 'China':
    message = 'Shipping to China will cost 100 credits';
    break;
    
  case 'Chile':
    message = 'Shipping to Chile will cost 250 credits';
   	break;
    
  case 'Australia':
    message = 'Shipping to Australia will cost 170 credits';
    break;
    
  case 'Jamaica':
    message = 'Shipping to Jamaica will cost 120 credits';
    break;
  
  default:
    message = 'Sorry, there is no delivery to your country';
}
  // Change code above this line
  return message;
}



// string length method (task 30)

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

// string elements indexsation method(task 31)

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);
// Change code above this line


// string slice() method(task 32)

function getSubstring(string, length) {
  const substring = string.slice(string, length) ; // Change this line

  return substring;
}

// formatMessage(message, maxLength) method(task 33)

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength) {
	result = message;
} else {
	result = message.slice(0, maxLength) + '...';
};
  /// Change code above this line
  return result;
}

// toLowerCase() & toUpperCase() method(task 34)

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

// includes() method(task 35)

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

// checkForSpam(message) method(task 36)

function checkForSpam(message) {
  let result;
  // Change code below this line
  const input = message.toLowerCase();

if (input.includes('spam') || input.includes('sale')) {
    result = true;
} else {
	result = false;
};
  
  // Change code above this line
  return result;
}