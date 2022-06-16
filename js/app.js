'use strict'
console.log('app js file is connected')

//prompt is assigned to username 
//<---- left to write

 //let userName = prompt('What is your name?');

 //console.log ( 'The user name :',userName);

//let coffee = prompt ("Choose a number between 1 and 12 to see if I can guess your favorite coffee?");

 //console.log( 'favorite beverage is', typeof coffee);

//let coffeeType = parseInt(coffee);
//console.log('did it turn into a number?',coffeeType);
//let message;
//if (coffeeType === 1) {
  //  message = 'Latte Macchiato!';
//} else if ( coffeeType === 2){
  //  message = 'Black eye!';
//} else if (coffeeType === 3){
  //  message = 'Frappe!';
//}else if (coffeeType === 4){ 
 //   message = 'Espresso-tonic!';
//}else if (coffeeType === 5){ 
 //   message = 'Cappucino';
//}else if(coffeeType === 6) {
  //  message = 'Espresso Fredo';
//}else if(coffeeType === 7) {
  //  message = 'Ra coffee';
//}else if(coffeeType === 8) {
  //  message = 'Iced latte';
//}else if (coffeeType === 9) {
 //   message = 'Cold Brew'
//}else if(coffeeType === 10) {
//    message = 'Romano'

//}else if(coffeeType === 11) {
  //  message = 'Irish Coffee'
//}else if(coffeeType === 12) {
 //   message = 'Affogato'
//}
//else  {
//message ='COFFEE TIME!';
//}



//Global Variable
let userInput;
let coffeeType;
let message;

function userName () {
  userInput = prompt('What  is your name ?');
  // console.log('username',userName);
  return userInput;
}
userName();





function coffeeTime(){

  let coffee = prompt ('Choose a number between 1 and 12 to see if I can guess your favorite coffee?');
  console.log('coffee', typeof coffee);

  coffeeType = parseInt(coffee);


  if(coffeeType === 1) {
    message = 'Latte Macchiato!';
  }else if ( coffeeType === 2){
    message = 'Black eye!';
  } else if (coffeeType === 3){
    message = 'Frappe!';
  }else if (coffeeType === 4){
    message = 'Espresso-tonic!';
  }else if (coffeeType === 5){
    message = 'Cappucino';
  }else if(coffeeType === 6) {
    message = 'Espresso Fredo';
  }else if(coffeeType === 7) {
    message = 'Ra coffee';
  }else if(coffeeType === 8) {
    message = 'Iced latte';
  }else if (coffeeType === 9) {
    message = 'Cold Brew';
  }else if(coffeeType === 10) {
    message = 'Romano';

  }else if(coffeeType === 11) {
    message = 'Irish Coffee';
  }else if(coffeeType === 12) {
    message = 'Affogato';
  }
  else {
    message ='Check out our menu to see some suggestions!';
  }


  console.log ('our return message', message);
}


coffeeTime();







document.write('Hi ya ' + userInput + '! Your favorite type of coffee is ' + coffeeType + ' ' + message);