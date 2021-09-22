let time = new Date();

//1
function showTime() {
	return (`Сейчас ${time.getHours()} часов  ${time.getMinutes()} минута  ${time.getSeconds()} секунд`)
}

console.log(showTime())


//2
// function setSecond(a) {
// 	time.setSeconds(time.getSeconds() +a);
// }
// setSecond(90);
// console.log(showTime());

//3
// function setMinutes(a) {
// 	time.setMinutes(time.getMinutes() + a);
// }
// setMinutes(32);
// console.log(showTime());


//4 
// function setHours(a){
// 	time.setHours(time.getHours() + a);
// }
// setHours(5);
// console.log(showTime());