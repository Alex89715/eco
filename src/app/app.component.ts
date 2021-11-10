import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                  <router-outlet></router-outlet>
             </div>`
})
export class AppComponent {
}
interface IUser {
    id: number;
    name: string;
}
let employee: IUser = {
     
    id: 1, 
    name: "Tom"
}
interface IUser {
    id: number;
    name: string;
}
let employee: IUser = {
     
    id: 1, 
    name: "Alice"
}
interface IUser {
    id: number;
    name: string;
}
function buildUser(userId: number, userName: string): IUser {
 
    return { id: userId, name: userName };
}
 
let newUser = buildUser(2, "Bill");
interface IUser {
    id: number;
    name: string;
    age?: number;
}
let employee: IUser = {
     
    id: 1, 
    name: "Alice",
    age: 23
}
let manager: IUser = {
     
    id: 2, 
    name: "Tom"
}

const num1 = <HTMLInputElement>document.getElementById("num1");
const num2 = <HTMLInputElement>document.getElementById("num2");
 

const result = document.getElementById("result");
const btn = document.getElementById("btn");
 
btn.addEventListener("click", (e) => { Sum(); });
 
function Sum()
{
   let sum : number = num1.valueAsNumber + num2.valueAsNumber;

   result.innerHTML = sum.toString();
}


function defaultLastName(): string{
    return "Smith";
}
 
function getName(firstName: string, lastName: string=defaultLastName()) {
     
    return firstName + " " + lastName;
}
interface Dog {
  legs: number;
}

interface Person {
  arms: number;
}
(person) => console.log(`I have ${person.arms} arms`)

type Living = Person | Dog;

interface Speaker<T extends Living> {
  speak: (living: T) => void;
};

let name1 = getName("Tom");

type Distribute<T> = T extends Living ? Speaker<T> : never;

const speakers: Array<Distribute<Living>> = [michel];

