// complete this js code
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.greet = function(){
// 	console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
// }


// function Employee(name, age, jobTitle) {
// 	Person.call(this, name, age);
// 	this.jobTitle = jobTitle;
// }
// Employee.prototype.jobGreet = function(){
// 	console.log("Hello, my name is " + this.name + " I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = function Employee(name, age, jobTitle) {
// 	Person.call(this, name, age);
// 	this.jobTitle = jobTitle;
// }
// Employee.prototype.jobGreet = function(){
// 	console.log("Hello, my name is " + this.name +  ", I am " + this.age + " years old, and my job title " + this.jobTitle + ".")
// }

function person(name, age) {
	this.name = name;
	this.age = age;
}
person.prototype.greet = function(){
	console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}
sjDetails = new person('shruti', 26);
console.log(sjDetails.greet());
// console.log(person)

function employee(name, age, jobTitle) {
	person.call(this, name, age);
	this.jobTitle = jobTitle;
}
employee.prototype.jobGreet = function(){
	console.log("Hello, my name is " + this.name + " I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
}
employee.prototype = Object.create(person.prototype);
employee.prototype.constructor = function employee(name, age, jobTitle) {
	person.call(this, name, age);
	this.jobTitle = jobTitle;
}
employee.prototype.jobGreet = function(){
	console.log("Hello, my name is " + this.name +  ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".")
}
pcDetails = new employee('pc', 23, 'engineer')
console.log(pcDetails.jobGreet());

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
