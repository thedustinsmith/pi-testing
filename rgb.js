var chip = require("./utility"),
		R = 11,
		G = 13,
		B = 15;

console.log("Please type the RGB values you'd like to pass [RGB] (type 'exit' to exit):")
process.stdin.resume();

function processData(d) {
	d = d.toString().trim();
	if (d === "exit") {
		exit();
	}
	else if (d.length === 3) {
		var r = parseInt(d[0], 10),
				g = parseInt(d[1], 10),
				b = parseInt(d[2], 10);

		doRGB(r, g, b);
	}
	else {
		console.error("Please supply a 3 character string... " + d.length);
	}
}

function doRGB(r, g, b) {
	chip.write(R, r);
	chip.write(G, g);
	chip.write(B, b);
	console.log("R:" + r + ", G:" + g + ", B:" + b);
}

function exit () {
	chip.writeLow(R);
	chip.writeLow(G);
	chip.writeLow(B);
	process.exit(1);
}
process.stdin.on('data', processData);

