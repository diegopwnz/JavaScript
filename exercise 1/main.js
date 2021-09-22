let Mycar = {
	manufacturer: 'renault',
	model: 'Kaptur',
	year: 2019,
	avgSpeed: 120,
	showCarInfo: function () {
		document.write(`<p>${Mycar.manufacturer}</p>`);
		document.write(`<p>${Mycar.model}</p>`);
		document.write(`<p>${Mycar.year}</p>`);
		document.write(`<p>${Mycar.avgSpeed}</p>`);
	},
	TimeFromDistance: function (distance) {
		let result = distance / Mycar.avgSpeed;
		let relax = 0;
		result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)

		for (let i = 1; i <= result; i++) {
			if (i % 5 == 0) {
				relax++;
				result++;
			}
		}
		result = result.toFixed(2).split(".");
		if (relax == 0) {
			document.write(`Что бы пройти эту дистанцию : ${distance}км, вам нужно ${result[0]}h. ${result[1]}m. И вам не понадобиться отдых.`);
		} else {
			document.write(`Что бы пройти эту дистанцию: ${distance}km. Вам нужно - ${result[0]}h. ${result[1]}m. <br> ${relax}h. вы потратили на одтых`);
		}
	}
}

Mycar.showCarInfo();
Mycar.TimeFromDistance(200);