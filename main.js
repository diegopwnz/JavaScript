//1


// class Ring {
// 	constructor(r) {
// 		this.r = r;
// 	}
// 	get radius() {
// 		return this.r;
// 	}
// 	set radius(r) {
// 		this.r = r;
// 	}
// 	get d() {
// 		return this.r * 2;
// 	}
// 	area() {
// 		return Math.PI * this.r * this.r;
// 	}
// 	circumference() {
// 		return Math.PI * this.r * 2;
// 	}
// }

// let ring = new Ring(5);
// console.log(ring.radius);
// console.log(ring.d);
// console.log(ring.area().toFixed(2));
// console.log(ring.circumference().toFixed(2));

//2  Не получаеться сделать нормально

// class HtmlElement {
// 	constructor(tag, autoClose, attributes, children, ...args) {
// 		this.tag = tag;
// 		this.autoClose = autoClose;
// 		this.attributes = attributes;
// 		this.children = children;

// 	}

// 	getHtml() {
// 		if (this.autoClose) {
// 			return `<${this.tag} ${this.attributes.join("")}/>`;
// 		}
// 		return `<${this.tag} ${this.attributes.join("")}>
// 		${this.children}
// 		 </ ${this.tag}>`;
// 	}
// }

// const div = new HtmlElement("div", true, ['name="login"'])

// console.log(div.getHtml())
// document.write(div.getHtml())

//3