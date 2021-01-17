import { greeting } from './external';

greeting();

const variable = 'World';
console.log(`Hello ${variable}`);


class Person {
  constructor() {
    this.name = 'jean';
  }
}

const object = new Person();
console.log(object.name);

