//1

// function pow(a, b) {
// 	return (b != 1) ? a * pow(a, b - 1) : a;
// }

// console.log(pow(5, 2));

//2

// function getNod(a, b) {
// 	a > b || ([a, b] = [b, a]);
// 	let len = b / 2,
// 		i = 2,
// 		k = 1;
// 	return (function f() {
// 		if (i === len) return k;
// 		if (!(b % i) && !(a % i)) {
// 			b /= i;
// 			a /= i;
// 			k *= i;
// 			return f()
// 		} else {
// 			++i;
// 			return f()
// 		}
// 	})();
// }
// console.log(getNod(10, 30));


//3

// function findMax(a, _max = -Infinity) {
// 	const str = (a + '');
// 	return str.length > 1 ?
// 		findMax(str.slice(1), Math.max(str[0], _max)) :
// 		+Math.max(str[0], _max);
// }

// console.log(findMax(56789));


//4 

// function isPrime(num, div = 3) {
// 	if (num === 2) return true;
// 	if (num < 2 || num % 2 === 0) return false;
// 	if (div * div > num) return true;
// 	if (num % div === 0) return false;
// 	return isPrime(num, div + 2);
// }

// console.log(isPrime(1));

//5

// function factors(a, arr = [], b = 2) {
// 	if (b > Math.sqrt(a)) {
// 		arr.push(a);
// 		return arr;
// 	} else if (a % b == 0) {
// 		arr.push(b);
// 		factors(a / b, arr, b);
// 	} else {
// 		factors(a, arr, ++b);
// 	}
// 	return arr.join("*");
// }

// console.log(factors(72));

//6

// function fib(n) {
// 	if (n == 1 || n == 2) return 1;
// 	else return fib(n - 2) + fib(n - 1);
// }
// let userNum = +prompt('Введите порядковый номер числа Фибоначчи');
// alert(fib(userNum));