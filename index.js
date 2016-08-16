'use strict';
const ansiEscapes = require('ansi-escapes');

const ESC = '\u001b[';
const smcup = `${ESC}?1049h`;
const rmcup = `${ESC}?1049l`;

const x = module.exports;

x.enter = () => {
	process.stdout.write(
		smcup +
		ansiEscapes.eraseScreen +
		ansiEscapes.cursorHide +
		ansiEscapes.cursorTo(0, 0)
	);
};

x.leave = () => {
	process.stdout.write(rmcup + ansiEscapes.cursorShow);
};
