const personPrototype = {
  firstName: 'Lucas',
  lastName: 'Monaco',
  age: 20,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Criar um objeto que delega para esse objeto (como se fosse uma herança)
const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson);

console.log(anotherPerson.fullName());
