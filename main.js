// 1
// let userName = prompt("ВВедите ваше имя");
// alert(userName);


// 2

// const currentYear = 2021;
// let age = prompt("Введите ваш год рождения");

// let result = currentYear - age;
// alert(`Вам ${result} лет`);

//3

// let squareLegnth = prompt("Введите длинну квадрат");

// let result = squareLegnth * 4;
// alert(`Пермиетр квадрата равен ${result}`);

//4

// let radius = prompt("Введите радиус окружности");

// const pi = 3.14;

// let result = pi * radius;
// alert(`Площадь окружности равна ${result}`);


//5

// let distance = prompt("Введите расстояние между городами");
// let time = prompt("За какое время хотите добраться");

// let speed = distance / time;
// alert(`Нужно двигаться со скоростью ${speed}км/ч что бы успеть вовремя `)


//6

// const eur = 0.95;

// let dollar = prompt("Сколько долларов перевести в евро?", 0);
// let result = dollar * eur + ' Евро';

// alert(result);



//7

// const userFile = 820;

// let flash = Number(prompt('Введите объем флешки в ГБ', 0));

// let result = flash * 1000 / userFile;

// alert(`${parseInt(result)} файлов вместиться на вашей флешке`);


//8

// let cash = Number(prompt('Введите сумму денег в кошельке', 0));
// let price = Number(prompt('Введите стоимсть шоколадки', 0));

// let result = cash / price;
// let a = cash % result;

// alert(`вы можете купить ${parseInt(result)} шоколадок, ваша сдача ${Math.ceil(a)} рубасиков`);

//9

// let num = Number(prompt('Введите трёхзначное число', 0));

// let num1 = Math.trunc(num / 100);
// let num2 = Math.trunc((num % 100) / 10);

// let num3 = num % Math.trunc(num / 10);

// let result = (num3 * 100) + (num2 * 10) + num1;
// alert(result);

//10

// let num = Number(prompt('Введите целое число', 0));

// num % 2 == 0 ? alert('Четное') : alert('Нечетное');