//1

// function stringInfo(string) {
// 	let str = string
// 	const sumNumbers = str.match(/\d+/g).join('').length;
// 	const sumLetters = str.match(/[a-z]/gi).join('').length;
// 	console.log(sumNumbers, sumLetters);
// }

// stringInfo('dsadokwqopkdapop121312451985');


//2


// function textNumber(number) {
// 	const dict = [
// 		['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'],
// 		['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
// 	];
// 	if (number >= 0 && number <= 10)
// 		return dict[0][number];
// 	if (number > 10 && number <= 19)
// 		return (dict[0][number] || dict[0][number - 10]) + 'надцать';
// 	if (number >= 20 && number <= 99) {
// 		const [units = 0, tens] = [...('' + number)].reverse().map(Number);
// 		return [
// 			tens ? dict[1][tens] || (dict[0][tens] + 'десят') : '',
// 			units ? dict[0][units] : ''
// 		].join(' ');
// 	}
// }

// console.log(textNumber(15))


//3

// function replaceLetter(str) {
// 	let result = "";
// 	for (let c of str)
// 		result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();

// 	return result;
// }

// console.log(replaceLetter('JavaScript'))


//4

// function camelize(str) {
// 	return str
// 		.split('-')
// 		.map(

// 			(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 		)
// 		.join('');
// }

// console.log(camelize('-webkit-transition'))

//5

// function acronym(words) {
// 	if (!words) {
// 		return '';
// 	}

// 	let first_letter = function (x) {
// 		if (x) {
// 			return x[0];
// 		} else {
// 			return '';
// 		}
// 	};

// 	return words.split(' ').map(first_letter).join('');
// }

// console.log(acronym('Cascading Style Sheets'))


//6 
// function longLine(...strings) {
// 	let n = strings.length;
// 	let newText = "";
// 	for (let i = 0; i < n; i++) {
// 		let text = strings[i];
// 		newText += text;
// 	}
// 	return newText;
// }

// function longLineBig() {
// 	let n = prompt("Ввести количество строк, которое нужно добавить: ");
// 	let strings = [];
// 	for (let i = 1; i <= n; i++) {
// 		let text = prompt("Ввод строки №" + i + " : ");
// 		strings.push(text);
// 	}
// 	alert(longLine(...strings));
// }

// longLineBig();


//7


//8

// function task8(url) {
// 	let arr1;
// 	let protocol;
// 	let domain;
// 	let arr2;
// 	let way;
// 	arr1 = url.split("://");

// 	protocol = arr1[0];
// 	arr2 = arr1[1].split("/");
// 	domain = arr2[0];

// 	arr2.shift();
// 	way = arr2.join("/");

// 	return "Информация\nпротокол: " + protocol +
// 		"\nдомен: " + domain + "\nпуть: " + way;
// }

// console.log(task8('https://itstep.org/ua/about'))


//9

// let stringDelimiter = function (sampleInput, delimiter) {
// 	let stringArray = [''];
// 	let j = 0;

// 	for (let i = 0; i < sampleInput.length; i++) {
// 		if (sampleInput.charAt(i) == delimiter) {
// 			j++;
// 			stringArray.push('');
// 		} else {
// 			stringArray[j] += sampleInput.charAt(i);
// 		}
// 	}
// 	return stringArray;
// }

// console.log(stringDelimiter('10/08/2020', '/'))

//10

// const print = (sourceString, ...args) => {
// 	let newString = sourceString;

// 	args.forEach((item, index) => {
// 		newString = newString.replace(`%${index + 1}`, item);
// 	});
// 	return newString
// }

// console.log(print(('Today is % 1 % 2. % 3. % 4', 'Monday', 10,
// 	8, 2020)))