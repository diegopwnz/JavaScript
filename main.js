//1

// let one = +prompt('Введите первое число', 0);
// let two = +prompt('Введите второе число', 0);

// function calc(a, b) {
// 	if (a < b) {
// 		return '-1'
// 	} else if (a > b) {
// 		return 1;
// 	} else if (a == b) {
// 		return 0;
// 	}
// }
// alert(calc(one, two));

//2

// function factorial(n) {
// 	return (n != 1) ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5));

//3

// function number(a, b, c) {
// 	let e = +('' + a + b + c)
// 	return e
// }
// console.log(number(1, 2, 3));


//4

// function rectangle(a, b = 0) {
// 	if (b == 0) {
// 		return a ** 2;
// 	}
// 	return a * b;
// }

// console.log(rectangle(2));
// console.log(rectangle(2, 4));


//5



//6 

//7


// function setTime(h) {
// 	return function setMinutes(m = 0) {
// 		return function setSeconds(s = 0) {
// 			return `${h}:${m}:${s}`
// 		}
// 	}
// }

// let time = setTime(22)()(16);
// console.log(time);


//8 

h = +prompt('часы');
m = +prompt('минуты');
s = +prompt('секунды');

function seconds(a, b, c) {
	return (h * 3600) + (m * 60) + s
}
alert(seconds(h, m, s))