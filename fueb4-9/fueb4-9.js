/*
 * fueb4-9.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let fach = [
		{"name": "Informatik 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Programmierung 1", "credit": 5, "type": "Pflichtfach"},
		{"name": "Englisch 1", "credit": 2, "type": "Wahlfach"}];
	let isWahl = (lecture) => lecture.type === "Wahlfach";
	let countPflicht = (acc, element) => acc + (isWahl(element)) ? element.credit * 30 : 0;
	terminal.printl(fach.reduce(countPflicht, 0));
};
