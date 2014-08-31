var chip = require("./utility"),
		pin = 7;

chip.writeHigh(pin, function () {
	console.log("done with high write");
	setTimeout(function () {
		chip.writeLow(pin, function () {
			console.log("done with low write");
		});
	}, 5000);
});