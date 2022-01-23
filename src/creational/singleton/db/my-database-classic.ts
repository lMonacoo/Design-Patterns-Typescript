import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  // Também poderia ser feito dessa forma: private static instance?: MyDatabaseClassic;
  private users: User[] = [];

  private constructor() {}

  // public não é necessário, pois quando esse modificador não existe, é porque ele é public
  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
