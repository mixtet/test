"use strict";
// function demo1(person:string){
//     return "Hello," + person
// }
// let user1 = "Jane User"
// // let user = [1,2,3]
// document.body.innerHTML = demo1(user1)
// 基础类型
// 布尔值
console.log('布尔值');
var isDone = false;
console.log(isDone);
// 数字
console.log('数字');
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binarayLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binarayLiteral);
console.log(octalLiteral);
// 字符串
console.log('字符串');
var fullname = "bob";
fullname = "smith";
console.log(fullname);
var nameg = "Gene";
var age = 37;
var senternce = "Hello,my name is " + nameg + ".I'll be " + (age + 1) + " years old next month";
console.log(senternce);
// 数组
console.log('数组');
var list = [1, 2, 3];
var list2 = [3, 4, 5];
console.log(list);
console.log(list2);
// 元组Tuple
console.log("Tuple");
var x;
x = ["hello", 10]; //ok
// x = [10, "hello"]// Error
console.log(x);
console.log(x[0].substr(2));
// x[2] = 'world';
// console.log(x[5].toString());
// x[6] =true
// 枚举
console.log('枚举');
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Bule"] = 3] = "Bule";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
