"use strict";
console.log('Hello typescript');
function greeter(person) {
    return "Hello , " + person.firstName + "  " + person.lastName;
}
var user = { firstName: "Poarry", lastName: "Yang" };
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var student = new Student("Poarry", "MA", "Yang");
console.log(greeter(student));
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//数值 boolean
console.log(isDone);
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
//字符串
var yourName = "bob";
yourName = "smith";
console.log(yourName);
var sName = "Gene";
var age = 39;
var sentence = "Hello ,my name is ".concat(sName, ".\nI'll be ").concat(age + 1, " year old nexr month \n");
console.log(sentence);
//数组
var list = [1, 23, 4];
var array = [1, 2, 3];
list.forEach(function (value) {
    console.log(value);
});
array.forEach(function (value) {
    console.log(value);
});
//元组 Tuple
//声明元组
var x;
//赋值 必须按照声明类型顺序
x = ['Hello', 10];
//按照已知索引访问元素
console.log(x[0]);
console.log(x[1]);
//枚举
//默认情况下从0开始位元素的编号，可以手动指定值，或者全部手动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
//根据枚举值查找对应的名字
var colorName = Color[2];
console.log(colorName);
//any 
//不确定的变量类型(允许在编译时可以选择的包含或者移除类型检查)
var notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
// console.log(notSure.ifItExists());
//一个包含不同类型数据的数组
var mutTypeArray = [1, true, "free"];
mutTypeArray.forEach(function (value) {
    console.log(value);
});
//void 类型与any类型相反，表示没有任何类型，
function warnUser() {
    alert("This is my warning message");
}
//声明一个void类型的变量没有用，因为只能为他赋值underfined和null
var unusable = undefined;
console.log(unusable);
//Null 和Undefined
//Ts中 各自的类型分别叫做undefined null
//默认情况下null和undefined时所有类型的子类型 --strictNullChecks限制此行为
//Never类型
//never类型表示永不存在的值的类型。比如不会有返回值的表达式 箭头函数表达式的返回值类型
//never类型时任何类型的子类型，也可以赋值给任何类型。
//返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//推断的返回值类型为never
function fail() {
    return error("Something failed");
}
//返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//类型断言
//方法一 尖括号<>
var someValue = "This is a string";
var strLength = someValue.length;
console.log(strLength);
//方法二 as
var anotherValue = "This is a string";
var anotherLength = anotherValue.length;
console.log(anotherLength);
