/*
 * fueb4-8.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let countType = (acc, element) => {
		acc[element.type] += 1;
		return acc;
	};
	let fach = [{"name": "Informatik 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Programmierung 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Englisch 1", "credit": 2, "type": "Wahlfach"}];
	terminal.printl(fach.reduce(countType, {"Wahlfach":0, "Pflichtfach":0}));
};
