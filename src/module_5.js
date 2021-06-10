// objects prototype task 1

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};

const child = Object.create(parent);

child.name = 'Jason';
child.age = 27;

// objects prototype task 2

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// function constructor task 3

function Car(brand, model, price){
	this.brand = brand;
  	this.model = model;
  	this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
const bmw = new Car('BMW', 'X5', 58900);
const nissan = new Car('Nissan', 'Murano', 31700);

// 'settings pattern' constructor task 4

function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car({brand: 'Audi', model: 'Q3', price: 58900});
const bmw = new Car({brand:'BMW', model: 'X5', price: 58900});
const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// prototypes for constructor task 5

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function(){
	return this.price;
}

Car.prototype.changePrice = function(newPrice){
	this.price = newPrice;
}

// prototypes for constructor task 6

function Storage(items) {
	this.items = items;
}

Storage.prototype.getItems = function(){
	return this.items;
}

Storage.prototype.addItem = function(newItem){
	this.items.push(newItem);
}

Storage.prototype.removeItem = function(item){
  	const itemIndex = this.items.indexOf(item);
	this.items.splice(itemIndex, 1);
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// string constructor task 7

function StringBuilder(baseValue){
	this.value = baseValue;
}

StringBuilder.prototype.getValue = function(){
	return this.value;
}

StringBuilder.prototype.padEnd = function(str){
	return this.value += str;
}

StringBuilder.prototype.padStart = function(str){
	return this.value = str + this.value;
}

StringBuilder.prototype.padBoth = function(str){
	return this.value = str + this.value + str;
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// private properties task 11

class Car {
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand(){
  	return this.#brand;
  }
  
  changeBrand(newBrand){
  	this.#brand = newBrand;
  }
}

// practice task 12

class Storage{
  #items;
  
  constructor(items){
    this.#items = items;
  }
  
  getItems(){
  	return this.#items;
  }
  
  addItem(newItem){
  	this.#items.push(newItem);
  }
  
  removeItem(item){
  	const itemIndex = this.#items.indexOf(item);
  	this.#items.splice(itemIndex, 1);
  }
}

const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// string constructor task 13

class StringBuilder{
 	#value;
  
  constructor(value){
  	this.#value = value;
  }
  
  getValue(){
  	return this.#value;
  }
  
  padEnd(str){
  	this.#value += str;
  }
  
  padStart(str){
  	this.#value = str + this.#value;
  }
  
  padBoth(str){
  	this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// getters/setters task 14

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// static params task 15

class Car {
  
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice <= Car.MAX_PRICE){
      this.#price = newPrice;
    } 
    return this.#price;
  }
 
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// static methods task 16

class Car {
  static #MAX_PRICE = 50000;
  
  static checkPrice(price) {
  	if (price > Car.#MAX_PRICE){
    	return('Внимание! Цена превышает допустимую.')
    } else {
    	return('Всё хорошо, цена в порядке.')
    }
  }
  
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// class CHILD extends PARENT task 17

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
  	BASIC: 'basic', 
    SUPERUSER: 'superuser',
  }
}

// super constructor task 18

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  accessLevel;
  
  constructor({email, accessLevel}){
    super(email);
  	this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser