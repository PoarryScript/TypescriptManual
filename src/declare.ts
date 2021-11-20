/**
 * 变量声明
 */

//var 声明
var a = 10;
function f() {
    var a = 10

    return function g() {
        var b = a + 1;
        return b;
    }
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
console.log(testf())


//作用域规则
function tf(shouldInitialize: boolean) {
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
function ttf(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }

    // return b;..error
    return a;
}




function foo() {
    return foos;
}
console.log(foo())//undefined
let foos = 3;
console.log(foo())

// let ax =20l;
// let ax = 203;
//不同与var ,let无法多次声明


for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}


//const 声明
//const 与let相似，被赋值之后不能再变。
//const变量的内部状态是可修改的，
const maxValue = 10;
//使用const可以更容易推测出数据的流动


//解构
//---解构数组
let input = [12, 34];
let [first, second] = input;//创建了两个变量名相当于使用了索引
console.log(first);
console.log(second);
//解构作用于已声明的变量会更好：
[first, second] = [second, first]//交换变量
console.log(first);
console.log(second);



function tsa([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
tsa([1002, 3478]);


let [firsta, ...arraym] = [1, 2, 3, 4, 5, 6];
console.log(firsta);
console.log(arraym);

//---对象结构
let o = {
    oa: "foo",
    ob: 123,
    oc: "testbar"
};
let { oa, ob } = o;//通过o.oa o.ob 创建了 oa ob  可以忽略不需要的对象
console.log(o)
console.log(oa)
//可以在对象里使用...语法创建剩余变量
let { oc, ...passThrough } = o;

console.log(passThrough);


//熟悉重命名

let { oa: newName1, ob: newName2 } = o//此处省略变量类型
//等同如下
// let newName1=o.oa;
// let newName2=o.oa;
//不省略变量类型
// let {oa,ob}:{oa:string,ob:number}=o;



//默认值
//在属性为undefined时使用
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(wholeObject)
}

let tesvale = {
    a: "eee",
    b: 33
}
keepWholeObject(tesvale);


//函数声明

type C = { a: string, b?: number };
function ftc({ a, b }: C): void {
    //
}
//设置默认值  设置格式对应谁的默认值
function ftc1({ a, b } = { a: "aaaa", b: 1024 }): void {

    console.log(a, b)
}

ftc1();


//展开
//展开操作符和结构正好相反，允许将一个数组展开为另一个数组，或对象展开为另一个对象
let stara = [1, 2];
let starb = [3, 4];
let bothPlus = [0, ...stara, ...starb, 5];
console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };//展开对象的后面的属性会覆盖前面的属性
console.log(search);//
///对象展开也有限制,会丢失其方法
class testC {
    p = 12;
    m() {


    }
}
let testc = new testC();
let clone = { ...testc };
console.log(clone.p);
// console.log(clone.m())//此方法丢失了




