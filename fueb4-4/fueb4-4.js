/*
 * fueb4-4.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let lecture = [
		{"name": "Informatik 1",
			"credit": 5, "type": "Pflichtfach"},
		{"name": "Programmierung 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Englisch 1",
			"credit": 2, "type": "Wahlfach"}
	];
	let acc = "<ul>"; // create the accumulator string to store the result
	lecture.forEach(value => {acc += `<li>${value["name"]}</li>`}); // the function is called for every value in the array and adds the name and some formatting to the accumulator string
	acc += "</ul>"; // close the tag opened at the beginning otherwise the HTML is not valid. It might display bit that's like putting a bike wheel on a semi truck and going on the highway
	terminal.printh(acc); // uses the given function to display the html as html and not plain text
};
