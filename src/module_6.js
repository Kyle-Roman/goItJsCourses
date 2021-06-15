// forEach() task 1

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(orderedItems, index){
    totalPrice += orderedItems[index];
  });

  return totalPrice;
}

// forEach() task 2

function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function(number, index, numbers){
    	if(numbers[index] > value) {
        filteredNumbers.push(numbers[index]);
      }
    });
  
    return filteredNumbers;
}
  
// forEach() task 3

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    const totalArray = [...firstArray, ...secondArray];
  
   firstArray.forEach(function(element, index, totalArray)	{
   	if (secondArray.includes(firstArray[index])) {
        commonElements.push(firstArray[index]);
      }
   }) 
    return commonElements;
  }

// => functions(explicit return) task 4

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

// => functions(implicit return) task 5

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// => functions(callback) task 6

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

// => functions(callback) task 7

const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    return filteredNumbers;
}
  
// => functions(callback) task 8

const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });

    return commonElements;
}
  
// => functions(callback) task 8

function changeEven(numbers, value) {

  	const newNumbers = [];
  
    numbers.forEach(number => {
      if (numbers[i] % 2 === 0) {
        newNumbers.push(numbers[i] + value);
      }
    }) 
}  
  
// => functions(callback) task 9

function changeEven(numbers, value) {

  	const newNumbers = [];
  
    numbers.forEach(number => {
        number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number)
    });
  return newNumbers;
}
  
// map() task 10

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet) => planet.length); // [5, 4, 6, 6]

// map() task 11

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
const titles = books.map(book => book.title);
  
// flatMap() task 12

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
    
const genres = books.flatMap((book) => book.genres); //[ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]

// flatMap() task 13 - 22

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = (users) => users.map(user => user.name);

const getUserEmails = (users) => users.map(user => user.email);

const getUsersWithEyeColor = (users, color) => 
    users.filter(user => user.eyeColor === color);   // task 18

const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(user => user.age <= maxAge && user.age >= minAge);   // task 19

const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));   // task 20

const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
    const uniqueFriends = allFriends.filter((user, index, users) => users.indexOf(user) === index);
  return uniqueFriends;                                         // task 21
};

const getActiveUsers = (users) => users.filter(user => user.isActive); // task 22

const getInactiveUsers = (users) => users.filter(user => !user.isActive); // task 23




// filter()/ find() task 15

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number%2 === 0); // [24, 82, 36, 18, 52]
const oddNumbers = numbers.filter(number => number % 2 !== 0); // [17, 61, 47, 73]

// filter()/ find() task 16

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];

  const allGenres = books.flatMap((book) => book.genres);
    const uniqueGenres = allGenres.filter((book, index, books) => books.indexOf(book) === index); // Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве

// filter()/ find() task 17

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// find task 24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);


// find task 25

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
   
// every task 26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];


const eachElementInFirstIsEven = firstArray.every((value) => value%2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value%2 !==0);

const eachElementInSecondIsEven = secondArray.every((value) => value%2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value%2 !==0);

const eachElementInThirdIsEven = thirdArray.every((value) => value%2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// every task 27

const isEveryUserActive = (users) => users.every((user) => user.isActive);

// some task 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((value) => value%2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value%2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value%2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value%2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value%2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// some task 29

const isAnyUserActive = users => users.some((user) => user.isActive);

// reduce task 30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((prevTime, playtime) => {
	return prevTime + playtime;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// reduce task 31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((avarageTotal, player) => {
	return avarageTotal + player.playtime / player.gamesPlayed;
}, 0);

// reduce task 32

const calculateTotalBalance = (users) => users.reduce((prevBalance, user) => {
	return prevBalance + user.balance;
}, 0);

