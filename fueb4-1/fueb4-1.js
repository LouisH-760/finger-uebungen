/*
 * fueb4-1.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let mod = emphase('b');
	terminal.print(mod(argv[0]));
};

function emphase(tag)
{
	let add = tag;
	return (text) => `<${add}>${text}</${add}>`;
}