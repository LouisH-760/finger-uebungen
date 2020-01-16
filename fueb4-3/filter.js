/*
 * filter.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let data = [
		{"name": "Informatik 1",
			"credit": 5, "type": "Pflichtfach"},
		{"name": "Programmierung 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Englisch 1",
			"credit": 2, "type": "Wahlfach"},
		{"name": "Programmierung 3",
			"credit":4, "type": "Pflichtfach"}
	];
	let l1 = data.filter(query => query["name"].charAt(query["name"].length - 1) == '1'); // if the last character of the string == '1'
	let l2 = data.filter(query => query["credit"] % 2 == 0); // if the credit is multiple of 2
	terminal.printl(l1);
	terminal.printh("<hr />"); // separate the two outputs
	terminal.printl(l2);
};
