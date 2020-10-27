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
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Bule"] = 4] = "Bule";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorname = Color[4];
console.log(colorname);
// Any
/**
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
 * 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
 * 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
 * 那么我们可以使用 any类型来标记这些变量：
 */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
/**
 * 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
 *  你可能认为 Object有相似的作用，就像它在其它语言中那样。
 * 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
 */
// console.log(notSure.ifItExists());  
// console.log(notSure.toFixed());//notSure.toFixed is not a function
var prettySure = 4;
// prettySure.toFixed()
var list3 = [1, true, 'free'];
list3[2] = 'asd';
console.log(list3);
// Void
/**
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
 *  当一个函数没有返回值时，你通常会见到其返回值类型是 void
 */
function warnUser() {
    console.log("this is my warning message");
}
warnUser();
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable = undefined;
// Null和Undefined
// Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('Something failed');
}
// 返回never的函数必须存在无法到达的终点
function infiniteLoop() {
    while (true) {
    }
}
// Object
