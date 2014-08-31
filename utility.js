var gpio = require("pi-gpio");

var writeHigh = function (pin, callback) {
	write(pin, 1, callback);
};
var writeLow = function (pin, callback) {
	write(pin, 0, callback);
};
var write = function (pin, val, callback) {
	gpio.open(pin, "output", function (err) {
		gpio.write(pin, val, function () {
			gpio.close(pin);
			console.log("closing pin "+ pin);
			if(callback) {
				callback();
			}
		});
	});
};

module.exports = {
	writeHigh: writeHigh,
	writeLow: writeLow,
	write: write,
	gpio: gpio
};