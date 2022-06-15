'use strict'
console.log('app js file is connected')

//prompt is assigned to username 
//<---- left to write

 let userName = prompt('What is your name?');

 console.log ( 'The user name :',userName);

let coffee = prompt ("Choose a number between 1 and 5 to see if I can guess your favorite coffee?");

 console.log( 'favorite beverage is', typeof coffee);

let coffeeType = parseInt(coffee);
console.log('did it turn into a number?',coffeeType);

let message;
if (coffeeType === 1) {
    message = 'Latte!';
} else if ( coffeeType === 2){
    message = 'Mocha!';
} else if (coffeeType === 3){
    message = 'Black coffee!';
}else if (coffeeType === 4){ 
    message = 'Red eye!';
}else if (coffeeType === 5){ 
    message = 'espresso';
}else  {
message ='COFFEE TIME!';
}

console.log ('our return message', message);

document.write('Hiya'+ userName + '!'+ 'your favorite type of coffee is '+ coffeeType + ' ' + message);