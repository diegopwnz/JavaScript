//1

// let age = Number(prompt('Введите свой возраст', 0));

// if (age <= 0 || age <= 11) {
// 	alert('Вы ребенок');
// } else if (age <= 12 || age <= 17) {
// 	alert('Вы подросток');
// } else if (age <= 18 || age <= 59) {
// 	alert('Вы взрослый');
// } else if (age > 60) {
// 	alert('С вас сыпеться песок');
// };

// 2

// let num = prompt('Введите число от 0 до 9', 0);


// switch (num) {
// 	case '0':
// 		alert(')');
// 		break

// 	case '1':
// 		alert('!');
// 		break

// 	case '2':
// 		alert('@');
// 		break

// 	case '3':
// 		alert('#');
// 		break

// 	case '4':
// 		alert('$');
// 		break

// 	case '5':
// 		alert('%');
// 		break

// 	case '6':
// 		alert('^');
// 		break

// 	case '7':
// 		alert('&');
// 		break

// 	case '8':
// 		alert('*');
// 		break

// 	case '9':
// 		alert('(');
// 		break

// 	default:
// 		alert('ERROR');
// 		break
// };

//3


// let num = +prompt('Введите трёхзначное число:', 0);

// let num1 = Math.trunc(num / 100);
// let num2 = Math.trunc(num / 10) % 10;
// let num3 = Math.trunc(num % 10);

// if (num1 == num2 || num1 == num3 || num2 == num3) {
// 	alert('Числа повторяються');
// } else {
// 	alert('Числа не повторяються');
// };

//4

// let num = prompt('Введите год', 0);

// if (num % 4 == 0 && num % 100 !== 0) {
// 	alert('Високосный год');
// } else {
// 	alert('Не високосный год');
// };

//5

// let num = prompt('Введите пятиразрядное число', 0);

// if (num === num.split('').reverse().join('')) {
// 	alert('Паллиндром');
// } else {
// 	alert('Не Паллиндром');
// };

//6

// let amount = prompt('Введите количество RUB', 0);
// let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);

// switch (currency) {
// 	case '1':
// 		alert(amount * 0.85 + 'EUR');
// 		break
// 	case '2':
// 		alert(amount * 2.5 + 'UAH');
// 		break
// 	case '3':
// 		alert(amount * 43 + 'AZN');
// };


//7

// let sum = prompt('Введите суммму покупки', 0);

// if (sum >= 200 && sum < 300) {
// 	alert(sum / 100 * 97 + `Руб учитывая скидку 3%`);
// } else if (sum >= 300 && sum < 500) {
// 	alert(sum / 100 * 95 + 'Руб учитывая скидку 5%');
// } else if (sum >= 500) {
// 	alert(sum / 100 * 93 + 'Руб учитывая скидку 7%');
// };

//8 

// let circle = prompt('ВВедите длину окружности:', 0);
// let square = prompt('Введите периметр квадрата:', 0);

// if (square <= circle / 2) {
// 	alert('Помещаеться');
// } else {
// 	alert('Не помещаеться');
// }

//9

// let ukraina = prompt('Украина це?  1 - Россия, 2 - Европпа, 3 - Це ми!', 0);
// let russia = prompt('Россия? 1 - matreshka 2 - vodka  3 - putin', 0);
// let time = prompt('Какое сейчас время?  1 - Время первых 2 - 17:30  3 - Время писать код', 0);

// let score = 0;

// if (ukraina == 2){
// 	score += 2;
// };

// if (russia == 3) {
// score +=2;
// };

// if(time == 3){
// 	score +=2;
// };

// alert(`Вы набрали ${score} балла, поздравляю!`);

//10 

// let date = prompt('Введите дату: День-Месяц-Год ');
// date = date.split('-');
// let oldDate = new Date(date[2], date[1] - 1, date[0]);
// oldDate.setDate(oldDate.getDate() + 1);
// alert(oldDate);