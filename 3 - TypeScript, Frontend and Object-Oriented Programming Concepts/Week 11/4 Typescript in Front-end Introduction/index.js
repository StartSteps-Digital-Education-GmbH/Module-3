"use strict";
const myButton = document.getElementById("mybutton");
myButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.printSomthing();
    console.log("asdasdas");
});
