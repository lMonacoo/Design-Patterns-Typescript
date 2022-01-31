// delegação

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Lucas',
  lastName: 'Monaco',
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person; // reatribuindo o contrutor (ficará igual uma classe)

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson; // reatribuindo o contrutor (ficará igual uma classe)

const person1 = new Person('Renata', 'Ingrata', 20);
console.log(person1);
// Person { firstName: 'Renata', lastName: 'Ingrata', age: 20 }
console.log(person1.fullName());
// Renata Ingrata

const person2 = new SubPerson('Elena', 'Vieira', 25);
console.log(person2);
// SubPerson { firstName: 'Elena', lastName: 'Vieira', age: 25, fromSubClass: 'OIE' }
console.log(person2.fullName());
// Elena Vieira
