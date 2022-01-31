export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);

person1.addAddress(address1);

const person2 = person1.clone();
person1.addresses[0].street = 'Bla bla bla';

person2.name = 'Person 2';

console.log(person2);
// Person { name: 'Person 2', age: 30, addresses: [ Address { street: 'Av Brasil', number: 15 } ] }
console.log('------');
console.log(person1);
// Person { name: 'Luiz', age: 30, addresses: [ Address { street: 'Bla bla bla', number: 15 } ] }
