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