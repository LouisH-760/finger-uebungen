/*
 * fueb4-5.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let lectures = [
		{"name": "Informatik 1",
			"credit": 5, "type": "Pflichtfach"},
		{"name": "Programmierung 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Englisch 1",
			"credit": 2, "type": "Wahlfach"}
	];
	terminal.printl(lectures.map(query => `${query["name"]} hat ${query["credit"]} Credits.`)); // map function: for all elements of the table, will create a string with the name and the number of credits. This is all places in an array, that is displayed
};
