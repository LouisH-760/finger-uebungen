/*
 * fueb2-8.js
 *
 */

import {terminal} from "./dfhi.js";
import {newInput} from "./dfhi-dom.js";

// Initialize page
let firstNameInput = undefined;
let surnameInput = undefined;
// fields only inserted after the DOM is loaded.
document.addEventListener("DOMContentLoaded", function(){
	firstNameInput = newInput("first-name", "First Name"); // add an input for the first name
	surnameInput = newInput("surname", "Surname"); // add an input for the surname

});

// WARNING: FOR SOME REASON THIS WON'T WORK IF YOU DON'T ADD RANDOM STUFF IN THE ARGUMENTS BAR
window.main = function(...argv) {
	let firstName = firstNameInput.value; // get the value from the added field
	let surname = surnameInput.value;     // same as above
	terminal.print(`Hello ${firstName} ${surname} from DOM`); // display the result
};
