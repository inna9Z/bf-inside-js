// #todo

'use strict';

/* const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35 
}
const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 37 
}
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true */

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}
console.log(deepEqual({ name: 'Inna', age: 30 }, { name: 'Inna', age: 35 }));
