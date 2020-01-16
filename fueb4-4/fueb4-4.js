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
	let acc = "<ul>";
	lecture.forEach(value => {acc += `<li>${value["name"]}</li>`});
	acc += "</ul>";
	terminal.printh(acc);
};
