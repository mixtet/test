// function demo1(person:string){
//     return "Hello," + person
// }

// let user1 = "Jane User"
// // let user = [1,2,3]

// document.body.innerHTML = demo1(user1)
// 基础类型
// 布尔值
console.log('布尔值');
let isDone: boolean = false
console.log(isDone);

// 数字
console.log('数字');
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binarayLiteral: number = 0b1010
let octalLiteral: number = 0o744
console.log(decLiteral);
console.log(hexLiteral);
console.log(binarayLiteral);
console.log(octalLiteral);

// 字符串
console.log('字符串')
let fullname: string = "bob"
fullname = "smith"
console.log(fullname)
let nameg: string = `Gene`
let age: number = 37
let senternce: string = `Hello,my name is ${nameg}.I'll be ${ age + 1 } years old next month`
console.log(senternce)

// 数组
console.log('数组')
let list: number[] = [1, 2, 3]
let list2: Array<number> = [3, 4, 5]
console.log(list);
console.log(list2);

// 元组Tuple
console.log("Tuple");
let x: [string, number]
x = ["hello", 10]//ok
// x = [10, "hello"]// Error
console.log(x);
console.log(x[0].substr(2));
// x[2] = 'world';
// console.log(x[5].toString());
// x[6] =true

// 枚举
console.log('枚举');
enum Color { Red = 2, Green = 3, Bule =4 }
let c: Color = Color.Green
console.log(c);
let colorname: string = Color[4]
console.log(colorname);

// Any
/**
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
 * 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
 * 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 
 * 那么我们可以使用 any类型来标记这些变量：
 */
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false
console.log(notSure);
/**
 * 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
 *  你可能认为 Object有相似的作用，就像它在其它语言中那样。 
 * 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
 */
// console.log(notSure.ifItExists());  
// console.log(notSure.toFixed());//notSure.toFixed is not a function
let prettySure: Object = 4
// prettySure.toFixed()
let list3: any[] = [1, true, 'free']
list3[2] = 'asd'
console.log(list3);

// Void
/**
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
 *  当一个函数没有返回值时，你通常会见到其返回值类型是 void
 */
function warnUser(): void { 
  console.log("this is my warning message");
}
warnUser()
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined

// Null和Undefined

// Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never { 
  throw new Error(message)
}
// 推断的返回值类型为never
function fail() { 
  return error('Something failed')
}
// 返回never的函数必须存在无法到达的终点
function infiniteLoop(): never { 
  while (true) { 

  }
}

// Object
/**
 * object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 * 使用object类型，就可以更好的表示像Object.create这样的API。
 */
declare function create(o: object | null): void;

// create({ prop: 0 })
// create(null)
// error
// create(42)
// create("string")
// create(false)
// create(undefined)

/**
 * 类型断言
 * 两种形式：
 *  1.尖括号
 *  2.as语法
 * 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；
 * 然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
 */
console.log("类型断言");
// 1.
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
console.log(strLength);
let strLength2: number = (someValue as string).length
console.log(strLength2);

// 尽可能使用let 代替var



//  变量声明

// 捕获变量
//  var
// for (var i = 0; i < 10; i++) {
//   // setTimeout(
//   //   function () { 
//   //     console.log(i)
//   //   }, 100 * i)//10....
//   (function (i) {
//     setTimeout(
//       function () {
//         console.log(i)
//       }, 100 * i);
//   })(i)
//   // ()()  第一个函数是定义了一个匿名函数，后一个括号是指调用这个函数并传入一个参数
//   // 定义函数  调用函数
//  }

// let: 块作用域
// for (let i = 0; i < 10; i++) { 
//   setTimeout(
//     function () { 
//       console.log(i);
//     },100 * i)
// }

//  const：常量，不可变，块作用域,TypeScript允许你将对象的成员设置成只读的。
const numLivesForCat = 9
const kitty = {
  name: 'Aurora',
  numLives:numLivesForCat
}

// kitty = {//error
//   name: 'skd',
// }
//  okay
kitty.name = 'xiaoming'
kitty.numLives = 3
console.log(kitty);

function createLi(s:string,value: any) { 
  var a = document.createElement('li')
  a.innerHTML = s + value
  document.getElementById('test')?.appendChild(a)
}

//  解构
// 语法
createLi("","解构 语法");
var a, b, rest;
[a, b] = [10, 20];
createLi("a = ",a);
createLi("b = ",b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
createLi('a = ',a);
createLi('b = ',b);
createLi('rest = ', rest);

({ a, b } = { a: 10, b: 20 });
createLi("a = ", a);
createLi('b = ', b);

createLi('对象解构', '');
let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
  d: 'asd',
  e: 90
};
// let { a, b } = o;
let { a: new1, b: new2 } = o
createLi('new1 = ', new1)
createLi('new2 = ', new2)
// 剩余
let { a:e, ...passthrough } = o
createLi('e = ', e)
let total = passthrough.b + passthrough.c.length;
createLi('total = ', total)













