console.log('Hello typescript');

/**
 * 基础数据类型
 */


interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello , " + person.firstName + "  " + person.lastName;
}

let user = { firstName: "Poarry", lastName: "Yang" };
console.log(greeter(user));



class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


let student = new Student("Poarry", "MA", "Yang");
console.log(greeter(student))

let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//数值 boolean
console.log(isDone)
console.log(decLiteral)
console.log(hexLiteral)
console.log(binaryLiteral)
console.log(octalLiteral)

//字符串

let yourName: string = "bob";
yourName = "smith";
console.log(yourName);

let sName: string = `Gene`;
let age: number = 39;
let sentence: string = `Hello ,my name is ${sName}.
I'll be ${age + 1} year old nexr month 
`;
console.log(sentence);


//数组
let list: number[] = [1, 23, 4];
let array: Array<number> = [1, 2, 3];
list.forEach(value => {
    console.log(value);
})
array.forEach(value => {
    console.log(value);
})

//元组 Tuple
//声明元组
let x: [string, number];
//赋值 必须按照声明类型顺序
x = ['Hello', 10];
//按照已知索引访问元素
console.log(x[0])
console.log(x[1])


//枚举
//默认情况下从0开始位元素的编号，可以手动指定值，或者全部手动赋值
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Blue;
console.log(c);
//根据枚举值查找对应的名字
let colorName: string = Color[2];
console.log(colorName);

//any 
//不确定的变量类型(允许在编译时可以选择的包含或者移除类型检查)
let notSure: any = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);

// console.log(notSure.ifItExists());

//一个包含不同类型数据的数组
let mutTypeArray: any[] = [1, true, "free"];

mutTypeArray.forEach(value => {
    console.log(value);
})



//void 类型与any类型相反，表示没有任何类型，
function warnUser():void{
    alert("This is my warning message");
}

//声明一个void类型的变量没有用，因为只能为他赋值underfined和null
let unusable:void=undefined;

console.log(unusable);


//Null 和Undefined
//Ts中 各自的类型分别叫做undefined null
//默认情况下null和undefined时所有类型的子类型 --strictNullChecks限制此行为


//Never类型
//never类型表示永不存在的值的类型。比如不会有返回值的表达式 箭头函数表达式的返回值类型
//never类型时任何类型的子类型，也可以赋值给任何类型。

//返回never的函数必须存在无法达到的终点
function error(message:string):never{
    throw new Error(message);
}
//推断的返回值类型为never
function fail(){
    return error("Something failed");
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop():never{
    while(true){

    }

}

//类型断言
//方法一 尖括号<>
let someValue:any ="This is a string";
let strLength:number=(<string>someValue).length;
console.log(strLength);
//方法二 as
let anotherValue:any ="This is a string";
let anotherLength:number = (anotherValue as string).length;
console.log(anotherLength);






