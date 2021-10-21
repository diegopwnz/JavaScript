// function compare(a, b) {
// 	if (a < b) {
// 		return -1
// 	} else if (a > b) {
// 		return 1
// 	} else {
// 		return 0
// 	}
// }

// console.log(compare(4, 4))


//2
// function factorial(n) {
// 	result = n;
// 	for (let i = n - 1; i > 1; --i) {
// 		result *= i;
// 	}
// 	return result;
// }

// console.log(factorial(5));


//3 

// let foo = (a, b, c) => +('' + a + b + c)

// console.log(foo(3, 5, 7))

//4

// function check(a, b = 0) {
// 	if (b == 0) {
// 		return a ** 2;
// 	}
// 	return a * b;
// }


// console.log(check(4));
// console.log(check(4, 8));


//5

// function is_perfect(number) {
// 	let temp = 0;
// 	for (let i = 1; i <= number / 2; i++) {
// 		if (number % i === 0) {
// 			temp += i;
// 		}
// 	}

// 	if (temp === number && temp !== 0) {
// 		console.log("Это идеальное число.");
// 	} else {
// 		console.log("Это не идеальное число.");
// 	}
// }
// is_perfect(27);


//6

// function getPerfect(a, b) {
// 	let result = [];
// 	for (let i = a; i < b; i++) {
// 		sum = 0;
// 		for (let n = 1; n <= i / 2; n++) {
// 			if (i % n === 0) sum += n;
// 		}
// 		if (i === sum) result.push(i);
// 	}
// 	return result;
// }

// console.log(getPerfect(1, 15000));

//7

// const setTime = h => {
// 	return (m = 0) => {
// 		return (s = 0) => {
// 			return `${h}:${m}:${s}`
// 		}
// 	}
// }

// let time = setTime(22)(13)(45);
// console.log(time);

//8

// function seconds(a, b, c) {
// 	return (a * 3600) + (b * 60) + c
// }

// console.log(seconds(00, 01, 00))


//9


// secToHHMMSS = seconds => `${Math.floor(seconds / 3600)}:${Math.floor((seconds % 3600) / 60)}:${Math.floor((seconds % 3600) % 60)}`

// console.log(secToHHMMSS(5687))

//10