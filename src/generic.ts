/**
 * 泛型
 */


function fn<T>(input:T):T{
    return input;
}


console.log(fn(10))
console.log(fn<string>("test string"))


function fun<T,K>(value1:K,value2:T):K{

    return value1;
}

//泛型继承
interface Ibase{
    key:number;
}
//泛型T必须是Ibase的子类
function fns<T extends Ibase>(inputs:T):number{
    return inputs.key;
}

fns({name:"asjdja",key:29});



//类也可以泛型

class Base<T>{
    name:T;

    constructor(name:T){
        this.name = name;
    }

}
const baseClass = new Base<string>("test name")
console.log(baseClass.name);
