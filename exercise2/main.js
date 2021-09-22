//1
let calc = {
	numerator: 5,
	denominator: 10,
	addition: function () {
		return (this.numerator + this.denominator)
	},
	substraction: function () {
		return (this.numerator - this.denominator)
	},
	multiplication: function () {
		return (this.numerator * this.denominator)
	},
	division: function () {
		return (this.numerator / this.denominator)
	},
	reduction: function () {
		let a;
		let b;
		for (let i = 2; i <= this.numerator; i++) {
			if (this.numerator % i === 0 && this.denominator % i === 0)
				a = this.numerator / i;
			b = this.denominator / i;
		}
		return a, b
	}
}


console.log(calc.reduction())