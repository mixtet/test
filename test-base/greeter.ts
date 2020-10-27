// function greeter(person:string){
//     return "Hello," + person
// }
//
// let user = "Jane User"
// // let user = [1,2,3]
//
// document.body.innerHTML = greeter(user)

//接口
// interface Person {
//     firstName:string,
//     lastName:string
// }

// function greeter(person:Person) {
//     return "Hello," + person.firstName + " " + person.lastName
// }

// let user = { firstName:"邓",lastName:'weiming' }
//
// document.body.innerHTML = greeter(user)

// 类
class Student1 {
    fullName: string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName:string,
    lastName:string
}

function greeter1(person:Person) {
    return "Hello," + person.firstName + " " + person.lastName
}

let user2 = new Student("Jane","M.","User")

document.body.innerHTML = greeter(user2)




