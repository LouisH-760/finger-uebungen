/*
 * fueb4-5.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let lectures = [
		{"name": "Inf 1",
			"credit": 5, "type": "Pflichtfach"},
		{"name": "Prog 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Eng 1",
			"credit": 2, "type": "Wahlfach"}
	];
	terminal.printl(lectures.map(query => `${query["name"]} hat ${query["credit"]} Credits.`)); // map function: for all elements of the table, will create a string with the name and the number of credits. This is all places in an array, that is displayed
	// NOT A PART OF THE THING
	terminal.printl(lectures.reduce((accumulator, currentValue) => accumulator + `${currentValue["name"]}\t${currentValue["type"]}\n`, "")); // uses reduce to compact the array into a string. the second argument of reduce is the initial value of the accumulator. it is here "" because the goal is to get a string
};
