/*
 * fueb2-10.js
 *
 */

import {terminal} from "./dfhi.js";
import {download} from "./dfhi-dom.js";

window.main = function(...argv) {
	let todo =
		`TODO:
* Lern JavaScript
* Write some programs
* Make party`;
	download("todo.txt", todo, "text/plain"); // lets the user download a .txt file with the content defined in the "todo" variable.
};