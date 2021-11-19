/**
 * 接口
 */

//ts核心原则之一是对值所具有的结构进行类型检查


function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
//TODO 类型检查器会检查调用的时候参数对象以及属性是否存在，类型是否匹配，多余的参数不关心
printLabel(myObj);

//使用接口重写：用接口描述参数,不需要实现，只关注传入的是否满足条件
interface LabelledValue {
    label: string;
}
//参数用接口描述
//类型检查器不去检查属性的顺序，只要相应的属性存在且类型都对就可以
function printLabels(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
printLabels(myObj);


//可选属性
//可选属性的接口和普通的接口定义差不多，只是在可选属性后加?
//可选属性的好处是可以对可能存在的属性精选预定义， 可以捕获引用了不存在的属性时的错误。

interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
let mySquares = createSquare({ color: "red", width: 100 });

console.log(mySquare)
console.log(mySquares)

//只读属性
//readonly 指定只读属性，只能在刚创建的时候修改其值
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };

// p1.x =5; 报错
//TS有ReadOnlyArray<T>类型，它与Array<T>相似
let asn: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = asn;
//无法修改


//readonly  const
//变量使用const 属性则使用readonly

//额外的属性检查


//函数类型
//接口描述函数类型  
//给接口定义一个调用签名，参数列表的每个参数都需要名字和类型
interface SearchFUnc {
    (source: string, sunString: string): boolean;
}


let mySearch: SearchFUnc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
console.log(mySearch("asdakfhahkjfga", "eue"))
console.log(mySearch("abcdef", "def"))

//可索引的类型
//具有索引签名，这个索引签名表示了当用number去索引获取StringArray时会得到string类型的返回值。

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);

class Animal {
    name!: string;
}
class Dog extends Animal {
    breed!: string;
}
interface NumberDictionary {
    [index: string]: number;
    length: number;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArrayTest: ReadonlyStringArray = ["Alice", "Bob"];
console.log(myArrayTest);
// myArrayTest[2]="dddd";//报错，因为只读



//类类型

//实现接口
//同java一样，ts能够通过它来明确的强制一个类去符合某种契约。
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date;

    constructor({ h, m }: { h: number; m: number; }) {
        this.currentTime = new Date();
    }
    setTime(d: Date): void {
        this.currentTime = d;
    }
}


//类静态部分与实例部分的区别
//constructor存在于类的静态部分
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterfacea;
}
interface ClockInterfacea {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfacea {
    return new ctor(hour, minute);
}


class DigitalClock implements ClockInterfacea {
    constructor(h: number, m: number) {

    }
    tick(): void {
        console.log(("tick tock"));
    }
}

class AnalogClock implements ClockInterfacea {
    tick(): void {
        console.log("tick tock");
    }
    constructor(h: number, m: number) {

    }

}
let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let dialog = createClock(AnalogClock, 8, 32);
dialog.tick();
console.log(digital);
console.log(dialog);


//继承接口
//和类一样，接口也可以相互继承，
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);
//一个接口可以继承多个接口，创建出多个接口的合成接口。
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let sq = <Square>{};
sq.color = "blue";
sq.sideLength = 10;
sq.penWidth = 5.0;
console.log(sq);


//混合类型

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}


function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
//一个对象同时作为函数和对象使用，且带有额外的属性。
let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
console.log(counter);


//接口继承类

//接口继承了一个类类型，他会继承类的成员单不包括实现，就像接口声明了成员，但没有提供实现，包括（private protected成员）
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select(): void {

    }
}
class TextBox extends Control {

}

