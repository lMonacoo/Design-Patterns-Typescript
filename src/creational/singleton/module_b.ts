// import { MyDatabaseClassic } from './db/my-database-classic';
// import { myDatabaseClassic as myDataBaseClassicFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.getInstance();
// myDatabaseClassic.add({ name: 'Roberto', age: 20 });
// myDatabaseClassic.add({ name: 'Joanna', age: 31 });
// myDatabaseClassic.add({ name: 'Luiza', age: 40 });
// myDatabaseClassic.show();

// console.log(myDatabaseClassic === myDataBaseClassicFromModuleA);

// import { MyDatabaseJavascript } from './db/my-database-javascript';
// import { myDatabaseJavascript as myDataBaseJavascriptFromModuleA } from './module_a';

// const myDatabaseJavascript = MyDatabaseJavascript.instance;
// myDatabaseJavascript.add({ name: 'Roberto', age: 20 });
// myDatabaseJavascript.add({ name: 'Joanna', age: 31 });
// myDatabaseJavascript.add({ name: 'Luiza', age: 40 });
// myDatabaseJavascript.show();

// console.log(myDatabaseJavascript === myDataBaseJavascriptFromModuleA);

import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDataBaseFunctionFromModuleA } from './module_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Roberto', age: 20 });
myDatabaseFunction.add({ name: 'Joanna', age: 31 });
myDatabaseFunction.add({ name: 'Luiza', age: 40 });
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDataBaseFunctionFromModuleA);
