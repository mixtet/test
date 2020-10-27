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
enum Color { Red = 1, Green, Bule }
let c: Color = Color.Green
console.log(c);





