'use strict';

function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printCamera = function() {
	console.log(this.brand + " camera pixels are " + this.camera + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 8);
var samsungGalaxyS6 = new Phone("Samsung" , 2100, "black", 10);
var onePlusOne = new Phone("One" , 2200, "white", 9);

iPhone6S.printInfo();
iPhone6S.printCamera();
samsungGalaxyS6.printInfo();
samsungGalaxyS6.printCamera();
onePlusOne.printInfo();
onePlusOne.printCamera();
