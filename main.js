//1
// let age = prompt('Введите ваш возраст');

// if (age >= 0 && age <= 11) {
// 	alert('вы ребенок');
// } else if (age >= 12 && age <= 17) {
// 	alert('Вы подросток')
// } else if (age >= 18 && age <= 59) {
// 	alert('Вы взрослый');
// } else if (age >= 60) {
// 	alert('вы пенсионер')
// }

//2
// let symbol = prompt('Введите число от 0 до 9');

// switch (symbol) {
// 	case '1':
// 		alert('!');
// 		break;
// 	case '2':
// 		alert('@');
// 		break;
// 	case '3':
// 		alert('#');
// 		break;
// 	case '4':
// 		alert('$');
// 		break;
// 	case '5':
// 		alert('%');
// 		break;
// 	case '6':
// 		alert('^');
// 		break;
// 	case '7':
// 		alert('&');
// 		break;
// 	case '8':
// 		alert('*');
// 		break;
// 	case '9':
// 		alert('(');
// 		break;
// 	case '0':
// 		alert(')');
// 		break;
// }


//3

// let num = +prompt('Введите трёхзначное число');

// let num1 = Math.trunc((num / 100));
// let num2 = Math.trunc((num / 10) % 10);
// let num3 = (num % 10);

// if (num1 == num2 || num2 == num3 || num1 == num3) {
// 	alert('Ваше число содержит повторяющиеся цифры')
// } else {
// 	alert('Совпадений чисел нет');
// }


//4

// let year = +prompt('Введите год');
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
// 	alert('Год високосный')
// } else {
// 	alert('Не високосный')
// }


//5

// let num = prompt('Введите пятизначное число');

// if (num === num.split('').reverse().join('')) {
// 	alert('Число палиндром');
// } else {
// 	alert('Число не палиндром');
// }


//6

// let usd = prompt('Введите количество далларов');
// let currency = prompt('В какую валюту хотите перевести? EUR, UAN, AZN?');
// const EUR = 0.89;
// const UAN = 26.58;
// const AZN = 1.70;
// switch (currency) {
// 	case 'EUR':
// 		alert(`ваши ${usd} долларов будут равны ${usd* EUR} евро`);
// 		break;
// 	case 'UAN':
// 		alert(`ваши ${usd} долларов будут равны ${usd* UAN} UAN `);
// 		break;
// 	case 'AZN':
// 		alert(`ваши ${usd} долларов будут равны ${usd* AZN} AZN `);
// 		break;
// }

//7

// let sum = prompt('Введите сумму покупки');
// if (sum >= 200 && sum <= 299) {
// 	alert(`с учетом скидки сумма составит ${sum / 100 * 97} рублей`);
// } else if (sum >= 300 && sum <= 499) {
// 	alert(`с учетом скидки сумма составит ${sum / 100 * 95} рублей`);
// } else if (sum >= 500) {
// 	alert(`с учетом скидки сумма составит ${sum / 100 * 93} рублей`);
// }

//8

// let radius = prompt('Введите длину окружности');
// let perimetr = prompt('Введите периметр квадрата');

// alert(radius <= perimetr / 2 ? 'Окружность поместится в квадрат' : 'Окружность не поместится в квадрат');


//9

// let v1 = prompt('Как зовут нашего царя? 1. Владимир Путин, 2. Стас Борецкий, 3. Петр Порошенко');
// let v2 = prompt('Чей крым? 1. Наш, 2. Ваш, 3. Няш-мяш');
// let v3 = prompt('В каком году началась вторая мировая война? 1. 1939, 2.2020, 3.1991');

// let sum = 0;

// if (v1 == 1) {
// 	sum += 2;
// }
// if (v2 == 1) {
// 	sum += 2;
// }
// if (v3 == 1) {
// 	sum += 2;
// }

// alert(`Поздравляю, вы набрали ${sum} очков`);

//10 (По другому без понятия как сделать)

// let date = prompt('Введите дату, например 19-09-1991');
// date = date.split('-');
// let getDate = new Date(date[2], date[1] - 1, date[0]);
// getDate.setDate(getDate.getDate() + 1);
// alert(`Следующая дата ${getDate}`);