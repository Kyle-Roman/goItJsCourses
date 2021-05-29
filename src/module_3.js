// object task 1

const apartment = {
	imgUrl: "https://via.placeholder.com/640x480",
  	descr: "Spacious apartment in the city center",
  	rating: 4,
  	price: 2153,
  	tags: ["premium", "promoted", "top"],
};

// object task 2

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  	owner: {
    	name: "Henry",
      	phone: "982-126-1588",
      	email: "henry.carter@aptmail.com",
    },
};
  
// object task 3

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
const aptTags = apartment.tags;
  
// object child elements task 4

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};


const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

// getting elements by [] task 5

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

// changing elements in objects task 6

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

// adding new elements in objects task 7

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

//  shorthand properties in objects task 8

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
	name,
  	price,
  	image,
  	tags,
};

//  computed properties in objects task 9

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
	[emailInputName]: "henry.carter@aptmail.com",
  	[passwordInputName]: "jqueryismyjam",
};

//  itirating objects (for...in) task 10

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment){
	keys.push(key);
  	values.push(apartment[key]);
};

//  hasOwnProperty in objects (for...in) task 11

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {

    if(apartment.hasOwnProperty(key)){
	    keys.push(key);
  	    values.push(apartment[key]);
    } 
}

//  objects properties count (Objects.keys()) task 12

function countProps(object) {
  let propCount = 0;
  let properties = [];
 
 for(const property in object) {
 	if (object.hasOwnProperty(property)){
   		properties.push(property);
      	propCount = properties.length;
  	};   
 }
  
 return propCount;
}

//  objects properties count (Objects.keys()) task 13

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];
	
const keys = Object.keys(apartment);

	for (const key of keys) {
     values.push(apartment[key]);
    }

//  objects properties count (Objects.keys()) task 14

// function countProps(object) {

//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;

// }

function countProps(object) {

  let propCount = 0;
  const keys = Object.keys(object);
  
  for (const key of keys) {
     propCount = keys.length;
    }	

  return propCount;

}

// OR

function countProps(object) {

  let propCount = 0;
  const keys = Object.keys(object);
  
  	if(propCount >= 0){
    	return keys.length;
    }
}

//  objects properties count (Objects.values()) task 15

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);


//  objects properties count (Objects.values()) task 16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const allSalaries = Object.values(salaries);
  
  	for (const salary of allSalaries){
    	totalSalary += salary;
    }
  return totalSalary;
}

//  objects array task 17

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
	for(const color of colors){
    	hexColors.push(color.hex);
		rgbColors.push(color.rgb);
}
    
//  objects array task 18

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
   
  for (const product of products){
  	let oneProductName = product.name;
    if (oneProductName === productName){
    	return product.price;
    } 
  }
    return null;
}

//  objects array task 19

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propValues = [];
  
  for (const product of products){
  	if(product.hasOwnProperty([propName])){
    	propValues.push(product[propName]);
    }
  }
  return propValues;
}

//  objects array task 20

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  
  for (const product of products){
  	if(product.name === productName){
    	totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice
}

//  objects destruction task 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {yesterday, today, tomorrow}  = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

//  defined values task 22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}  = highTemperatures;


const meanTemperature = (yesterday + today + tomorrow) / 3;

//  renaming keys in destruction task 23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}  = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//  objects destruction in cicles task 24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];


for (const {hex, rgb} of colors) {
  hexColors.push({hex, rgb}.hex);
  rgbColors.push({hex, rgb}.rgb);
}


//  deep destruction in cicles task 25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
const {
	today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
  tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}
} = forecast;

//  "settings object " task 26


function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh} , tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// spread in objects task 27

const scores = [89, 64, 42, 17, 93, 51, 26];


const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// joining array using spread task 28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// spread/join props overwrite task 29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

// props sequence in objects task 30


function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  
  const inputData = {completed, category, priority,  ...data};
  
  return inputData;  
}

// sum of arguments task 31

function add(...args) {
  const sum = args.reduce((a, b) => a + b, 0);
  	return sum;
}

// sum or arguments > number task 32


function addOverNum(number,...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > number){
    	total += arg;
    }
  }
  return total;

}

// array includes ...rest args task 33

function findMatches(...args) {
  const matches = [];
  
  
  for (let a = 0; a <= args.length; a += 1){
  	if (args[0].includes(args[a])){
    	matches.push(args[a]);
    }
  }

  return matches;
}

// adding methods to objects task 34

const bookShelf = {
 
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
  	return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName){
  	return `Updating book ${oldName} to ${newName}`;
  }

};

// changing elements in arrays task 35

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};

// task 36 atTheOldToad

const atTheOldToad = {
  potions: []
};

// task 37 atTheOldToad getting potions array

const atTheOldToad = {
  
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  
  getPotions(){
  	return this.potions
  },
};

// task 38 atTheOldToad adding potion

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

// task 39 atTheOldToad removing potion

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
       const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
};

// task 40 atTheOldToad changing potion name

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
};

// task 41 refactoring code for objects

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  
  removePotion(potionName) {
    const { potions } = this;
    for (let potion = 0; potion < potions.length; potion += 1) {
      if (potions[potion].name === potionName) {
        potions.splice(potion, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
   updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let potion = 0; potion < potions.length; potion += 1) {
      if (potions[potion].name === oldName) {
        potions[potion].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },

};