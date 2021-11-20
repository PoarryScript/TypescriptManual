"use strict";
/**
 * 变量声明
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
//var 声明
var a = 10;
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g());
function testf() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log(testf());
//作用域规则
function tf(shouldInitialize) {
    /*   if (shouldInitialize) {
          var x = 10;
      }
      return x; */
}
// console.log(tf(false));
// console.log(tf(true));
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
//let声明
//let 声明一个变量使用的是词法作用域或块作用域。同于使用var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的
function ttf(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b;..error
    return a;
}
function foo() {
    return foos;
}
console.log(foo()); //undefined
var foos = 3;
console.log(foo());
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
// let ax =20l;
// let ax = 203;
//不同与var ,let无法多次声明
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
//const 声明
//const 与let相似，被赋值之后不能再变。
//const变量的内部状态是可修改的，
var maxValue = 10;
//使用const可以更容易推测出数据的流动
//解构
//---解构数组
var input = [12, 34];
var first = input[0], second = input[1]; //创建了两个变量名相当于使用了索引
console.log(first);
console.log(second);
//解构作用于已声明的变量会更好：
_a = [second, first], first = _a[0], second = _a[1]; //交换变量
console.log(first);
console.log(second);
function tsa(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
tsa([1002, 3478]);
var _b = [1, 2, 3, 4, 5, 6], firsta = _b[0], arraym = _b.slice(1);
console.log(firsta);
console.log(arraym);
//---对象结构
var o = {
    oa: "foo",
    ob: 123,
    oc: "testbar"
};
var oa = o.oa, ob = o.ob; //通过o.oa o.ob 创建了 oa ob  可以忽略不需要的对象
console.log(o);
console.log(oa);
//可以在对象里使用...语法创建剩余变量
var oc = o.oc, passThrough = __rest(o, ["oc"]);
console.log(passThrough);
//熟悉重命名
var newName1 = o.oa, newName2 = o.ob; //此处省略变量类型
//等同如下
// let newName1=o.oa;
// let newName2=o.oa;
//不省略变量类型
// let {oa,ob}:{oa:string,ob:number}=o;
//默认值
//在属性为undefined时使用
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(wholeObject);
}
var tesvale = {
    a: "eee",
    b: 33
};
keepWholeObject(tesvale);
function ftc(_a) {
    var a = _a.a, b = _a.b;
    //
}
//设置默认值  设置格式对应谁的默认值
function ftc1(_a) {
    var _b = _a === void 0 ? { a: "aaaa", b: 1024 } : _a, a = _b.a, b = _b.b;
    console.log(a, b);
}
ftc1();
//展开
//展开操作符和结构正好相反，允许将一个数组展开为另一个数组，或对象展开为另一个对象
var stara = [1, 2];
var starb = [3, 4];
var bothPlus = __spreadArray(__spreadArray(__spreadArray([0], stara, true), starb, true), [5], false);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" }); //展开对象的后面的属性会覆盖前面的属性
console.log(search); //
///对象展开也有限制,会丢失其方法
var testC = /** @class */ (function () {
    function testC() {
        this.p = 12;
    }
    testC.prototype.m = function () {
    };
    return testC;
}());
var testc = new testC();
var clone = __assign({}, testc);
console.log(clone.p);
// console.log(clone.m())//此方法丢失了
