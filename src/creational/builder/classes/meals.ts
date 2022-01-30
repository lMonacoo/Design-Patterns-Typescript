import { AbstractMeal } from './abstract-meal';

// arroz
export class Rice extends AbstractMeal {}
// feijão
export class Beans extends AbstractMeal {}
// carne
export class Meat extends AbstractMeal {}
// bebida
export class Beverage extends AbstractMeal {}
// sobremesa
export class Dessert extends AbstractMeal {}

const rice = new Rice('Arroz', 10);
console.log(rice);
