"use strict";
/**
 * 接口
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ts核心原则之一是对值所具有的结构进行类型检查
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
//TODO 类型检查器会检查调用的时候参数对象以及属性是否存在，类型是否匹配，多余的参数不关心
printLabel(myObj);
//参数用接口描述
//类型检查器不去检查属性的顺序，只要相应的属性存在且类型都对就可以
function printLabels(labelledObj) {
    console.log(labelledObj.label);
}
printLabels(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySquares = createSquare({ color: "red", width: 100 });
console.log(mySquare);
console.log(mySquares);
var p1 = { x: 10, y: 20 };
// p1.x =5; 报错
//TS有ReadOnlyArray<T>类型，它与Array<T>相似
var asn = [1, 2, 3, 4];
var ro = asn;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("asdakfhahkjfga", "eue"));
console.log(mySearch("abcdef", "def"));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArrayTest = ["Alice", "Bob"];
console.log(myArrayTest);
var Clock = /** @class */ (function () {
    function Clock(_a) {
        var h = _a.h, m = _a.m;
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log(("tick tock"));
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
digital.tick();
var dialog = createClock(AnalogClock, 8, 32);
dialog.tick();
console.log(digital);
console.log(dialog);
var square = {};
square.color = "blue";
square.sideLength = 10;
console.log(square);
var sq = {};
sq.color = "blue";
sq.sideLength = 10;
sq.penWidth = 5.0;
console.log(sq);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
//一个对象同时作为函数和对象使用，且带有额外的属性。
var counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
console.log(counter);
//接口继承类
//接口继承了一个类类型，他会继承类的成员单不包括实现，就像接口声明了成员，但没有提供实现，包括（private protected成员）
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
    };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
