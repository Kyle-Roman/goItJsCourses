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