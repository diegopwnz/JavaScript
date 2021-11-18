//1
// let num = prompt('Введите число');

// if(num > 0){
//     alert('Число положительное');
// } else{
//     alert('Число отрицательное')
// }

//2

// let age = prompt('Введите ваш возраст');
// if(age >= 0 && age <= 120){
//     alert('Возраст корректен');
// } else{
//     alert('Ошибка')
// }

//3
// let module = prompt('Введите число');
// alert(`Модуль числа ${module} равняется ${Math.abs(module)}`);

//4
// let hour = Number(prompt('Введите часы'));
// let min = Number(prompt('Введите минуты'));
// let sec = Number(prompt('Введите секунды'));

// if(hour <= 23 && hour >=0 || min <= 60 && min >=0 || sec <= 60 && sec >= 0){
//     alert('Время корректно');
// } else{
//     alert('Время не корректно')
// }

//5
// let x = prompt('Vvedite X');
// let y = prompt('vvedite Y');

// if(x > 0 && y > 0){
//     alert('pervaya');
// } else if(x<0 && y> 0){
//     alert('vtoraya');
// } else if(x< 0 && y<0 ){
//     alert('tretya');
// } else if(x > 0 && y < 0){
//     alert('chetvertaya');
// } else{
//     alert('err')
// }



//1
// let month = prompt('Введите номер месяца');

// switch(month){
//     case '1':
//         alert('Январь');
//         break;
//     case '2':
//         alert('Февраль');
//         break;
//     case '3':
//         alert('Март');
//         break;
//     case '4':
//         alert('Апрель');
//         break;
//     case '5':
//         alert('Май');
//         break;
//         default:
//             alert('not');
// }

//2
// let num1 = +prompt('Введи 1 число');
// let num2 = +prompt('Введи 2 число')
// let plus = prompt('Введи знак действия');

// switch(plus){
//   case '+':
//       alert(num1 + num2);
//       break;
//     case '-':
//         alert(num1 - num2);
//         break;
//     case '*':
//         alert(num1 * num2);
//         break;
//     case '/':
//         alert(num1 / num2);
//         break;
//         default:
//             alert('err');
// }
//1
// let num = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');

// num > num2 ? alert('Первое') :alert('Второе');


 //2
// let num = prompt('Введите число');
// num % 5 == 0 ? alert('Число кратное 5') : alert('не кратное 5')

//3
// let planet = prompt('Введите название планеты');
// planet == 'Земля' || planet =='земля' ? alert('Привет Землянин') : alert('Привет инопланетянин');







for( let n = prompt('введите число'); n <= 10; n++ ){
    if(n % 2 == 0){
        console.log(n);
    } else if(n % 2 !== 0){
        console.log(`нечетное ${n}`);
    }
}


// for( let n = prompt('введите число'); n >= 10; n--){
//     if(n % 2 == 0){
//         console.log(n);
//     } else if(n % 2 !== 0){
//         console.log(`нечетное ${n}`)
//     }
// }