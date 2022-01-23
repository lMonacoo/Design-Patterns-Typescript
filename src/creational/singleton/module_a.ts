// import { MyDatabaseClassic } from './db/my-database-classic';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// myDatabaseClassic.add({ name: 'Lucas', age: 20 });
// myDatabaseClassic.add({ name: 'Julia', age: 31 });
// myDatabaseClassic.add({ name: 'Janaina', age: 40 });
// myDatabaseClassic.add({ name: 'Marco', age: 25 });

// export { myDatabaseClassic };

// import { MyDatabaseJavascript } from './db/my-database-javascript';

// const myDatabaseJavascript = MyDatabaseJavascript.instance;
// myDatabaseJavascript.add({ name: 'Lucas', age: 20 });
// myDatabaseJavascript.add({ name: 'Julia', age: 31 });
// myDatabaseJavascript.add({ name: 'Janaina', age: 40 });
// myDatabaseJavascript.add({ name: 'Marco', age: 25 });

// export { myDatabaseJavascript };

import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Lucas', age: 20 });
myDatabaseFunction.add({ name: 'Julia', age: 31 });
myDatabaseFunction.add({ name: 'Janaina', age: 40 });
myDatabaseFunction.add({ name: 'Marco', age: 25 });

export { myDatabaseFunction };
