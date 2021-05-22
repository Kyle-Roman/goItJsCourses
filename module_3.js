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

//  objects properties count task 12

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

//  objects properties count task 13

const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];
	
const keys = Object.keys(apartment);

for (const key of keys){
	values.push(keys[key])
}
