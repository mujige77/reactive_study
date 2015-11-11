"use strict"

export class Student {
        public fullName: string
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson): string {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user: Student = new Student("Jane", "M.", "User")

console.log( greeter(user) )
console.log( "full name: " + user.fullName )


