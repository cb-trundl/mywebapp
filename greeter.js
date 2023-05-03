"use strict";
//greeter.ts
function greeter(person) {
    return "Hello ${person}!";
}
const userName = "Welcome, Node Hero";
console.log(greeter(userName));
