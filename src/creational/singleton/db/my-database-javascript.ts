import { User } from '../interfaces/user';

export class MyDatabaseJavascript {
  private static _instance: MyDatabaseJavascript | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseJavascript {
    if (MyDatabaseJavascript._instance === null) {
      MyDatabaseJavascript._instance = new MyDatabaseJavascript();
    }
    return MyDatabaseJavascript._instance;
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
