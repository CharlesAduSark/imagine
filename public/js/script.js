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
  