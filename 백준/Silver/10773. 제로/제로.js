const solution = (n) => {
	let sum = 0;
	let stack = [];
	for (let i = 0; i < n; i++) {
		if (input[i]) {
			stack.push(input[i]);
			sum += input[i];
		} else {
			sum -= stack.pop();
		}
	}
	console.log(sum);
};

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	input = input.map((el) => Number(el));
	let n = input.shift();
	solution(n);
	process.exit();
});