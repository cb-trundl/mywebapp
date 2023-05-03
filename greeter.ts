//greeter.ts
function greeter(person: string) {
    return "Hello ${person}!"
}
const userName = "Welcome, Node Hero"
console.log(greeter(userName))
