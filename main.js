//1 

// let start = Number(prompt('Введитте цифру начала диапазона:', 0));
// let end = Number(prompt('Введите цифру конца диапазона:', 0));
// let sum = 9;

// while (start <= end) {
// 	sum += start;
// 	start++;
// }

// alert(sum);

//2

// let num1 = prompt('Введите первое число:', 0);
// let num2 = prompt('Введите второе число:', 0);

// let num3;

// function calc(a, b) {
// 	let c;
// 	while (a != b) {
// 		if (a > b) {
// 			a = a - b;
// 		} else if (a < b) {
// 			c = a;
// 			a = b;
// 			b = c;
// 		}

// 	}
// 	return num3 = a
// }

// calc(num1, num2);
// alert(`НОД чисел ${num1} и ${num2} будет ${num3}`);


//3

// let arr = [];
// let num = prompt('Введите число');
// if (num < 0) {
// 	num = num * -1;
// }
// for (let i = 1; i <= num; i++) {
// 	if (num % i == 0) {
// 		arr.push(i);
// 		arr.push(i * -1);
// 	}
// }

// alert(`Делители числа ${num}: ${arr}`);

//4 
// let num = prompt('Введите число:', 0);

// function getDigitLength(n) {
// 	let a = 0;
// 	while (a < n.length) a++;
// 	return a;
// }
// alert(getDigitLength(num));

//5


// let positive = 0;
// let negative = 0;
// let zero = 0;


// for (let i = 0; i < 10; i++) {
// 	let num = prompt('Введите 10 чисел по одному за раз', 0);

// 	if (num > 0) {
// 		positive++;
// 	} else if (num < 0) {
// 		negative++;
// 	} else {
// 		zero++;
// 	}
// }

// if (positive > 0) {
// 	console.log('Количествво положительных:' + positive);
// }
// if (positive > 0) {
// 	console.log('Количество отрицательных:' + negative);
// } else {
// 	console.log('Отрицательных чисел нет');
// }
// if (positive > 0) {
// 	console.log('Количество нулей:' + zero);
// }

//6