
let person = {
    noom: 'Mosh',
    age: 30
};
// Dpt notation  is consis and clean
person.noom = 'John ';
// bracket notation
person['noom']= 'Mary';


// Array

console.log(person );
let selectedColors = ['red', 'blue'];
selectedColors[2]= 'green'
selectedColors[3] = 1;
console.log(selectedColors.length);

// Function

//Performing a task function

function greet(name, lastName){

    console.log("Hello World "+ name+ " " + lastName);
}

greet("Sam", "deck");

// fucntion that cal the value
function square(number){
   return number*number;
}

// square(2);
console.log(square(2));


