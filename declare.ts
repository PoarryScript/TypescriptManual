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