const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let name = 'Charles Adu-Sarkodie';
let age = 40;
let present = false;
console.log(name);

// objects
const car = {
    numberPlate: 'GR-154-23',
    model: 'Bentley',
    color: 'White',
    weight: 60,
    weightUnit: 'KG',
    owner:{
        name: 'Charles Adu-Sarkodie',
        driver:{
            name: 'Fiifi'
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);

// Arrays 
const tweet1 = {
    text: 'I am learning Javascript today.',
    likes: 5,
    shares: 2,
    retweet: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 2,
    shares: 10,
    retweet: 5
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[2];
  
  //Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if(today.getHours() >= 16) {
    console.log('Class has ended');
  } else {
    console.log('Class is in session');
  }
  
  // For loop
  for (let i = 0;  i<=10; i+=2) {
    console.log('Notify friends!', i);
  }  

  // Functions
// Defining functions
function login(username, password) {
  if (username == 'charlie' && password == 'sark1234') {
    return 'User is logged in';
  } else if (username != 'charlie') {
    return 'Invalid username!';
  } else if (password !=1234) {
    return 'Invaid password!';
  } else {
    return 'invalid username or password!';
  }
}

// Invoking functions
login('charlie', 'sark1234');

// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

// comparison operators
2 == 2;

// Built-in Math Function
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(12,45,98);

Math.ceil(Math.random() * 10000);

// Order of operations
1 * 2 + 3 - 4 / 2 % 2**2;

// Handling user input
1200 + '250';
1200 + Number('250');

// String concatenation
const firstname = 'Charles';
const lastname = 'Adu-Sarkodie';
firstname + ' ' + lastname;

// Template literal
`${firstname} ${lastname}`;

// String methods Length
firstname.length;
lastname.length;
`${firstname} ${lastname}`.length;

// String method UpperCase
firstname.toUpperCase();

// String method CharAt
lastname.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt()}`;

// String conversion
String(2014);

// Write a function that will add a participant to our Google Classroom

function signup(name , group) {
  if (name == 'Charles' && group == 'Alpha') {
    return 'User added to Google Classroom';
  } else if (name != 'Charles') {
    return 'Not a Student!';}
}

// Invoking function
signup ('Charles', 'Alpha');

// Write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (!email) {
    return 'Email not provided!';
  }
  // check if email is valid
  if (!email.includes ('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participants
  participants.push(email);
  // Notify them via mail
  // return response
  return 'Participant added!';
}

addParticipant('char@gmail.com');


const alphabets = ['A', 'B','C','D'];
alphabets.join (' ').split(' ');


// Write a function that will take a user with firstname and lastname and return fullname

const user = {
  firstname: 'Nana',
  lastname: 'Adu'
}
function fullname(user) {
  return {
    ...user,
    fullanme: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);

// Array map
const users = [
  {firstname: 'Linda' , lastname: 'Parker'},
  {firstname: 'Mark' , lastname: 'Adu'},
  {firstname: 'Nana' , lastname: 'Kwesi'},
  {firstname: 'Naa' , lastname: 'Zoe'},
  {firstname: 'Kweku' , lastname: 'Osei'},
]

users.map(fullname);

// Map and return squares of numbers
function square(number) {
 return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2==0;
}
numbers.filter(even);

// Write a function that takes a user with name and date of birth and returns true if their birthday is today else false.

// const user = {
  name: 'Martin King',
  dateofBirth: '2024-06-12'
}

function isBirthday(user) {
 const today = new Date();
  const birthDate = new Date(user.dateofBirth);
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
  return true;
} else {
  return false;
}
  return true;
}

isBirthday(user);

// Write a function that takes a user with name and date of Birth and returns birthday with their name if their birthday is today else return not your day.

function birthdayGreeting() {
  if (isBirthday(user)) {
    return 'Happy birthday, ${user.name}';
  } else {
    return 'Not Yet!';
  }
}

birthdayGreeting();